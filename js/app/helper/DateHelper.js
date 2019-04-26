class DateHelper
{
    /* 
        Callback é a função cujo retorno produz o novo elemento do array que será retornado no final e essa função recebe três argumentos
        Com este spread operator (...), indicamos que o array será desmembrado - e o primeiro item do array, e cada parâmetro do Date será posicionado na mesma ordem no construtor.
        Porém, temos que encontrar uma forma de, antes de reposicionarmos cada parâmetro para o constructor, decrementarmos 1 do valor do mês.

        ..

        Functional approching: 1 mod 2 = 1 (Remainder). 
        "10" - 2 -> No map é feita uma subtração que faz conversão explícita de String para Number.

        Arrow functions: Com isso eliminamos a palavra function e adicionamos => (que representa uma flecha).
    */
    textoParaData(texto)
    {
        return new Date(texto.value.split('-').map((item, index) => item - index % 2));
    }

    dataParaTexto(data)
    {
        return data.getDate() 
        + '/' + (data.getMonth() + 1) 
        + '/' + data.getFullYear();
    }
}