    
class DateHelper
{
    constructor()
    {
        throw new Error("Esta classe não pode ser instanciada!");
    }

    static dataParaTexto(data)
    {
        /* return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
           O exemplo abaixo representa a utilização do String Templates
           (´`) - backtick (crases)
        */
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    } 

    /* 
        Callback é a função cujo retorno produz o novo elemento do array que será retornado no final e essa função recebe três argumentos
        Com este spread operator (...), indicamos que o array será desmembrado - e o primeiro item do array, e cada parâmetro do Date será posicionado na mesma ordem no construtor.
        Porém, temos que encontrar uma forma de, antes de reposicionarmos cada parâmetro para o constructor, decrementarmos 1 do valor do mês.
        ..
        Functional approching: 1 mod 2 = 1 (Remainder). 
        "10" - 2 -> No map é feita uma subtração que faz conversão explícita de String para Number.
        Arrow functions: Com isso eliminamos a palavra function e adicionamos => (que representa uma flecha).
    */
    static textoParaData(texto)
    {
        /* O método textoParaData deve receber o ano-mês-dia. 
           Nós já vamos validar na variável 'texto' se passamos uma string no padrão estabelecido, exibindo uma mensagem caso o padrão não seja exibido. 
           Faremos algo denominado 'fail-fast'.
           Os valores 4, 2 e 2 sinalizam que os números terão tais quantidade de dígitos, respectivamente. Com test, pedimos que a expressão teste se o texto segue o padrão.
        */
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) 
            throw new Error("Deve estar no formato aaaa-mm-dd");
        
        return new Date(...texto.split('-').map((item, index) => item - index % 2));
    }

    /* Métodos Estáticos:
        Caso a sua Classe não possua nenhum atributo você pode deixar todos os seus métodos estáticos pois não haverá o que ser alterado, logo não precisara de instancia. Assim você só usa os métodos que precisa da classe e pronto.
        Mas se sua Classe tiver atributos você não poderá ter somente métodos estáticos pois eles não acessam os atributos do objeto e não será possivel alterar esses atributos caso queira após a instancia. 
    */
}