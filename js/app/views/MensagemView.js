class MensagemView
{
    constructor(elemento)
    {
        this._elemento = elemento;
    }

    _template(modelo)
    {
        /* 
           Para evitar que a mensagem saia vazia, retornamos um parágrafo sem a classe. Mas se tiver texto, vai dar verdadeiro e o retorno será o template.
           Caso contrário, o retorno será um parágrafo sem a classe alert-info e, consequentemente, sem a tarja azul.
        */
        return modelo.texto ? `<p class = "alert alert-info">${modelo.texto}</p>` : '<p></p>';
    }

    update(modelo)
    {
        this._elemento.innerHTML = this._template(modelo);
    }
}