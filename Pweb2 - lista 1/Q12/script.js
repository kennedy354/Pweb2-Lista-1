let n = parseInt(prompt("Digite o Tamanho da sequencia"));
let fibo=1
let anterior=0
let outro=1

for(i=0;i<n;i++){
    document.write(fibo,"<br></br>")

    outro=fibo

    fibo=anterior+fibo

    anterior=outro
}