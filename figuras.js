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

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}


function calcularAlturaTriangulo(){
    const input1 = document.getElementById("inputLado1");
    const lado1=input1.value;
    const input2 = document.getElementById("inputLado2");
    const lado2=input2.value;
    const input3 = document.getElementById("inputLado3");
    const lado3=input3.value;
    let lado = 0;
    let base = 0;
    if (lado1 == lado2){
        lado=lado1;
        base=lado3;
    }else if (lado2 == lado3){
        lado=lado2;
        base=lado1;
    }else if (lado3 == lado1){
        lado=lado1;
        base=lado2;
    }else{
        alert("Dos de los lados deben ser iguales");
    }

    if(base!=0){
    const altura = Math.sqrt((lado*lado)-((base/2)*(base/2)));
    alert (altura);
    }
}