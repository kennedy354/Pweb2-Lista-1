let n= parseInt(prompt("Digite o primeiro Número"));
let m= parseInt(prompt("Digite o segundo Número"));
let p= parseInt(prompt("Digite o terceiro Número"));

let maior=0
let medio=0
let soma=0

if(n>=m && n>=p){
    maior=n
}
if(m>=n && m>=p){
    maior=m
}
if(p>=n && p>=m){
    maior=p
}

if(maior==n){
    if(m>=p){
        medio=m
    }
    if(p>=m){
        medio=p
    }
}
if(maior==m){
    if(n>=p){
        medio=n
    }
    if(p>=n){
        medio=p
    }
}
if(maior==p){
    if(m>=n){
        medio=m
    }
    if(n>=m){
        medio=n
    }
}
soma=medio+maior
document.write("Dos Números ",n,", ",m,", ",p,". Os maiores são ",maior," e ",medio,"<br></br>")
document.write("A soma deles é ",soma)