let n= parseInt(prompt("Digite o Número"));

let m=0
let primo=0

m=n/2

for(i=2; i<=m;i++){
    if(n%i==0){
        primo=1
    }
}
if(n<=1){
    primo=1
}
if(primo==1){
    document.write("O numero ",n," não é primo<br></br>")
}
if(primo==0){
    document.write("O numero ",n," é primo<br></br>")
}