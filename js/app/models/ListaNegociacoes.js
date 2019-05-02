class ListaNegociacoes
{
    constructor()
    {
        this._negociacoes = [];
    }

    adiciona(negociacao)
    {
        this._negociacoes.push(negociacao);
    }

    get negociacoes()
    {
        // Defensive programming to prevent something like this._listaNegociacoes.negociacoes.push(this._criaNegociacao); to be called in the 'NegociacaoController.js'
        return [].concat(this._negociacoes);
    }

    get 
}