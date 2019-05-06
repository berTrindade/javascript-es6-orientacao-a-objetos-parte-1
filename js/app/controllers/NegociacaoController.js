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

        // Colocaremos a View assim que a página for recarregada
        this._mensagem = new Mensagem();

        /*
         * O MensagemView recebeu onde queremos incluir a mensagem no HTML. Ou seja, no parágrafo <p> que criamos no nosso HTML.
         * Pegamos o elemento do DOM no NegociacaoController.js, adicionando o $
         * Usamos o update e dentro passamos o this._mensagem
        */
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }
    
    adiciona(event) 
    {   
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        // Adicionando a mensagem após inclusão de negociação
        this._mensagem.texto = 'Negociacao adicionada com sucesso';
        this._mensagemView.update(this._mensagem);

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