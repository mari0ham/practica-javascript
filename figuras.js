//Código del cuadrado
//const ladoCuadrado = 5;
console.group("Cuadrado");
//console.log("Los lados del cuadrado miden :" + ladoCuadrado + "cm");
function perimetroCuadrado(lado){
    return 4*lado;
}
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
function areaCuadrado(lado){
    return lado * lado;
} 
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();
//Código del triángulo

/* const ladoTriangulo1 = 6;
 const ladoTriangulo2 = 6;
 const baseTriangulo = 4;
 const alturaTriangulo = 5.5;*/
console.group("Triángulo");
/*console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, " + baseTriangulo + "cm" 
);
console.log(
    "La altura del triángulo es de: " 
    + alturaTriangulo + "cm"
);*/
function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
} 
/*console.log(
    "El perímetro del tiángulo es de: "
    + perimetroTriangulo + "cm"
);*/
function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
/*console.log(
    "El área del triángulo es: "
    + areaTriangulo + "cm^2"
);*/
console.groupEnd();
//Código del círculo
console.group("Círculo");
//const radioCirculo = 4;
/*console.log(
    "El radio del círculo es: " 
    + radioCirculo + "cm"
);*/
function diametroCirculo(radio){
    return radio * 2;
} 
/*console.log(
    "El diámetro del círculo es: " 
    + diametroCirculo + "cm"
);*/
const PI = Math.PI;
console.log(
    "PI es: " 
    + PI
);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
/*console.log(
    "El perímetro del círculo es: " 
    + perimetroCirculo + "cm"
);*/
function areaCirculo(radio){
    return (radio*radio)* PI;
} 
/*console.log(
    "El área del círculo es: " 
    + areaCirculo + "cm^2"
);*/
console.groupEnd();
