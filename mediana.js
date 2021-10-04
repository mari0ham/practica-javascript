function calcularMediana (lista) {
    let mediana
    let listaOrdenada = lista.sort((a,b)=>a-b);
    console.log(listaOrdenada);
    const mitadLista = parseInt(listaOrdenada.length / 2);
    if(esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        return mediana = calcularMediaAritmetica([elemento1, elemento2]);
    } else {
        return mediana = listaOrdenada[mitadLista];
    }
}

function esPar(numero) {
    if(numero % 2 == 0){
        return true;
    } else {
        return false;
    }
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}