let n = parseInt(prompt("Digite um valor positivo. Digite um valor negativo para encerrar"));
j=0
if (n>0){
    for(i=1; i<n+1; i++){
        j=j+i;
        document.write(j);
        document.write("<br><br>");
    }
}