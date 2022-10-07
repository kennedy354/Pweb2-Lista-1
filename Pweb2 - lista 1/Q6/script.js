let a = parseInt(prompt("Digite o primeiro valor"));
let b = parseInt(prompt("Digite o segundo valor"));
let c = parseInt(prompt("Digite o terceiro valor"));

maior=0
medio=0
menor=0

if(a<b && a<c){
    menor=a
}
if(b<a && b<c){
    menor=b
}
if(c<b && c<a){
    menor=c
}

if(a>b && a>c){
    maior=a
}
if(b>a && b>c){
    maior=b
}
if(c>b && c>a){
    maior=c
}

if(a != maior && a!=menor){
    medio=a
}
if(b != maior && b!=menor){
    medio=b
}
if(c != maior && c!=menor){
    medio=c
}

document.write(menor,"<br>")
document.write(medio,"<br>")
document.write(maior,"<br>")