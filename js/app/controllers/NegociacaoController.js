class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._form = $(".form");
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacaoView($('#negociacoesView'));

        this._negociacoesView.update(this._listaNegociacoes);
    }
    
    adiciona(event) 
    {   
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);
    }

    _criaNegociacao()
    {
        let data = DateHelper.textoParaData(this._inputData.value);

        return new Negociacao 
        (
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario()
    {
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}