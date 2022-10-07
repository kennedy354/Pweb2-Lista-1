let a = parseInt(prompt("Digite a nota I"));
let b = parseInt(prompt("Digite a nota II"));
let c = parseInt(prompt("Digite a nota III"));
let d = parseInt(prompt("Digite a nota IV"));
let e = parseInt(prompt("Digite a nota V"));

if(a>=70 && b>=70 && c>=70 && d>=70 && e>=70){
    document.write("Classificação A")
}

else if((a>=70 && b>=70 && d>=70) && (e<70 || c<70)){
    document.write("Classificação B")
}

else if((a>=70 && b>=70) && (c>=70 || d>=70) && (e<70)){
    document.write("Classificação C")
}

else{
    document.write("Classificação D")
}