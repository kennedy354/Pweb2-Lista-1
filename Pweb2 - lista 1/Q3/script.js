let x = parseInt(prompt("Digite um valor x"));
let n = parseInt(prompt("Digite um valor n positivo"));

while(n<0){
    n = parseInt(prompt("Digite um valor n positivo"));
}

potencia = x**n;

document.write(potencia);