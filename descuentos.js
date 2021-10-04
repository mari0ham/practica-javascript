function calcularPrecioConDescuento(precio, descuento) {

const porcentajePrecioConDesuento = 100 - descuento;
const precioConDescuento = (precio*porcentajePrecioConDesuento) / 100;

return precioConDescuento;
}

function ClickBotonCalcular(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    console.log(priceValue);

    const precioConDescuento = calcularPrecioConDescuento();
    const parrafoResultado = document.getElementById("Resultado");
    parrafoResultado.innerText = "El precio con descuento es $" + precioConDescuento;
}