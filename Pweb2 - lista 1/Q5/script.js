let a = parseInt(prompt("Digite o primeiro número"));
let b = parseInt(prompt("Digite o segundo número"));
let resto = 0;

while (b != 0){
    resto = a % b;
    a = b;
    b = resto;
}

document.write(a);