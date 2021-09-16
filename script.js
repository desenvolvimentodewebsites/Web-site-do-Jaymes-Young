//1
let pi = 3.14159;
let raio = 100.64;

let area = pi*Math.pow(raio, 2);

console.log(area.toFixed(4));

//2

let nota1 = 5
let nota2 = 10
let nota3 = 10

let media = (nota1*2 + nota2*3 + nota3*5)/10.0;

console.log(media.toFixed(1));

//3

let salariofixo = 1700
let totalvendas = 1230.50

let comissao = totalvendas * 0.15;

let salariofinal = salariofixo + comissao

console.log(salariofinal.toFixed(2));


//4
let valor1 = 3
let valor2 = 4
let valor3 = 5.2

let pi2 = 3.14159

let areatriangulo = (valor1 * valor3) / 2;
let areacirculo = pi * Math.pow(valor3, 2);
let areatrapezio = ((valor1 + valor2) * valor3) / 2;
let areaquadrado = valor2*valor2;
let arearetangulo = valor1*valor2;

console.log("triangulo:" + areatriangulo.toFixed(3));
console.log("circulo: " + areacirculo.toFixed(3));
console.log("trapezio: " + areatrapezio.toFixed(3));
console.log("quadrado: " + areaquadrado.toFixed(3));
console.log("retangulo: " + arearetangulo.toFixed(3));