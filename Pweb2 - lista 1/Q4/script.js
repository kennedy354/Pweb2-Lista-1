let n = parseInt(prompt("Digite um valor positivo"));

fato=1

if(n>0){
    for(i=1; i<=n; i++){
        fato=fato*i;
    }
    document.write("Fatorial de ",n," é ",fato);
}