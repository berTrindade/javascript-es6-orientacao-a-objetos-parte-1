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

       let dataHelper = new DateHelper();

       //let data = dataHelper.textoParaData(this._inputData.value);

       console.log(this._inputData.value);

       let data = new Date(this._inputData.value.split('-').map(
           (item, index) => item - index % 2)

            console.log(item);

           );

        console.log(data.getMonth());

        let negociacao = new Negociacao 
        (
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        let date = negociacao.data.getDate() + '/' + (negociacao.data.getMonth() + 1) + '/' + negociacao.data.getFullYear();
 
        console.log(negociacao.data);

        this.limpaFormulario();
    }

    limpaFormulario()
    {
        this._form.reset();
        this._inputData.focus();
    }
}