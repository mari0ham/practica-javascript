const lista1 = [
    1,
    2,
    5,
    2,
    6,
    4,
    5,
    2,
    3,
    5,
    2
];

function calcularModa(lista){
    const listaCount = {};

    lista.map(
        function(elemento){
            if(listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    )

    const listaArray = Object.entries(listaCount).sort(
        function(A, B){
            return A[1] - B[1];
        }
    );

    return moda = listaArray[listaArray.length - 1];
}