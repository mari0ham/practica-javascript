function calcularPrecioConDescuento(precio, coup) {

var porcentajeDescuento = 0;

coup.forEach(coupons => {
    if (coupons[2])
    porcentajeDescuento = porcentajeDescuento + coupons[1];
});

const porcentajePrecioConDescuento = 100 - porcentajeDescuento;
const precioConDescuento = (precio*porcentajePrecioConDescuento) / 100;
return precioConDescuento;
}

function ClickBotonCalcular(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    console.log(priceValue);

    const cupon1 = document.getElementById("casillaCupon1");
    const cupon2 = document.getElementById("casillaCupon2");
    const cupon3 = document.getElementById("casillaCupon3");

    var cupones = [
        ["cupon1", 10, cupon1.checked],
        ["cupon2", 20, cupon2.checked],
        ["cupon3", 50, cupon3.checked]
    ];
    console.log(cupones);
    const precioConDescuento = calcularPrecioConDescuento(priceValue, cupones);
    const parrafoResultado = document.getElementById("Resultado");
    parrafoResultado.innerText = "El precio con descuento es $" + precioConDescuento;
}