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
                            /* Quando trabalhamos com um único retorno, não precisamos usar as chaves ({}). Também podemos remover o return.
                             * Use reduce() quando: é preciso encontrar um valor cumulativo ou concatenado com base em elementos de todo o array. URL: https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/
                            */
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
                            <td>${modelo.negociacoes.reduce((total, negocicao) => total += negocicao.volume, 0.0)}</td>
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

