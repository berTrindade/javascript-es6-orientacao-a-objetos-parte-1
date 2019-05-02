class NegociacaoView
{
    constructor(elemento)
    {
        this._elemento = elemento;
    }

    _template(modelo)
    {
        return `<table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    
                    <tbody>
        
                        ${modelo.negociacoes.map(negociacao => 
                            // Quando trabalhamos com um único retorno, não precisamos usar as chaves ({}). Também podemos remover o return.
                            `<tr>
                                <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>`).join('')}
                    </tbody>
                    
                    <tfoot>
                        <tr>
                            <td colspan = "3"></td>
                            <td>${
                                /* Dentro da expressão ${}, precisamos retornar um valor. 
                                 * Só que quando usamos uma instrução, não podemos adicionar uma sequência de instruções. 
                                 * Seremos espertos e adicionaremos uma função dentro do $. Utilizaremos uma Immediately-invoked function expression (IIFE) ou a função imediata. Trata-se de um recurso usado na criação de escopo em JavaScript, que nos ajudará a colocar um bloco na expressão, sendo executado imediatamente. No caso, o $ receberá o total.
                                */
                                (function()
                                {
                                    let total = 0;

                                    modelo.negociacoes.forEach(negociacao => total += negociacao.volume);
                                    return total;
                                })()
                            }</td>
                        </tr>
                    </tfoot>
                </table>`;      
    }

    update(modelo)
    {
        // Será responsável por converter as strings em elementos do DOM. Isto será inserido com filho da <div>
        this._elemento.innerHTML = this._template(modelo);
    }
}

