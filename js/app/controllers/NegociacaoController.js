class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._form = $(".form");
    }
    
    adiciona(event) 
    {   
        event.preventDefault();

        // Inseri -> 22-04-2019
        // Recebi -> 04-21-2019
        /*
         Uma maneira de trabalhar com Date é utilizando um array, que terá o ano, mês, dia
         Uma forma de transformar a data que é uma string, fique dentro do array é utilizando a função split('-'), e assim, a data será separada com hífens.
         */

         /* 
         Por que conseguimos solucionar passando um array? Quando geramos o array com ano, mês e dia, ele transforma cada item em uma string e adiciona o separado. Só que quando passamos o array '2016', '11', '12', o que é o reagrupamento por debaixo dos panos de cada item usando o separador ,.
         Existe no array o método join(), que une todos os itens e depois, forma uma string com separadores.
         */
        //let data = new Date(this._inputData.value.split('-'));
        //let data = new Date(this._inputData.value.replace(/-/g, ','));
        
        /*
        O Javascript irá tratar o mês de 01 a 12, quando vc passar uma única string representando a data! Exatamente como é no caso:
        new Date("1995,01,24"); // O resultado é 24/01/1995

        ..

        Se em vez disso, vc passar várias strings representando cada uma delas um campo da sua data, então o comportamento será o mesmo que passar valores numéricos:
        new Date("1995", "01", "24"); // O resultado é 24/02/1995
        
        ...

        let inputData = this._inputData.value.split('-');

        let year = inputData[0];
        let month = inputData[1];
        let day = inputData[2];         

        let data = new Date(year, (month - 1), day);

        let date = inputData[0] + ", " + inputData[1] + ", " + inputData[2];

        let data = new Date(date);

        let data = new Date(inputData);

        */    

       let data = new Date(...this._inputData.value.split('-').map((item, index) => item - index % 2));

        let negociacao = new Negociacao 
        (
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        let diaMesAno = negociacao.data.getDate() 
        + '/' + (negociacao.data.getMonth() + 1) 
        + '/' + negociacao.data.getFullYear();
  
        console.log(negociacao.data.getMonth());

        this.limpaFormulario();
    }

    limpaFormulario()
    {
        this._form.reset();
        this._inputData.focus();
    }
}