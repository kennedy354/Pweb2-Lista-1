let x = prompt("Digite um valor");

while(x != 0){
    document.write(x*x);
    document.write("<br>");
    x = parseInt(prompt("Digite um valor para encerrar digite 0"));
}