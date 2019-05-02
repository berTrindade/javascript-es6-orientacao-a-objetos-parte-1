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
                            {
                                /*
                                 * O forEach() itera pelos itens de um array, o map() itera fazendo alguma transformação e retorna um novo array.
                                 * map() returns an array
                                 * Sem o join, o array será convertido para string usando vírgula como separador. As vírgulas aparecem no canto esquerdo logo acima da tabela.
                                 * No join(), utilizamos o mesmo com parâmetros vazio, pois senão utilizamos, o seu padrão é realizar o uso do critério de separação dos itens da string a vírgula.
                                 * Com join(''), você esta criando uma única String com cada item sem separador. É essa string que é usada na interpolação.
                                */
                                return `<tr>
                                            <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                                            <td>${negociacao.quantidade}</td>
                                            <td>${negociacao.valor}</td>
                                            <td>${negociacao.volume}</td>
                                        </tr>`
                            }).join('')}
                    </tbody>
                    
                    <tfoot>
                    </tfoot>
                </table>`;      
    }

    update(modelo)
    {
        // Será responsável por converter as strings em elementos do DOM. Isto será inserido com filho da <div>
        this._elemento.innerHTML = this._template(modelo);
    }
}

