class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    
    adiciona(event) {
        
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

        /* 
           Callback é a função cujo retorno produz o novo elemento do array que será retornado no final e essa função recebe três argumentos
           Com este spread operator (...), indicamos que o array será desmembrado - e o primeiro item do array, e cada parâmetro do Date será posicionado na mesma ordem no construtor.
           Porém, temos que encontrar uma forma de, antes de reposicionarmos cada parâmetro para o constructor, decrementarmos 1 do valor do mês.

           ..

           Functional approching: 1 mod 2 = 1 (Remainder). 
            "10" - 2 -> No map é feita uma subtração que faz conversão explícita de String para Number.

            Arrow functions: Com isso eliminamos a palavra function e adicionamos => (que representa uma flecha).
        */
       let data = new Date(...this._inputData.value.split('-').map((item, index) => item - index % 2));

        let negociacao = new Negociacao 
        (
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
}