let anos= parseInt(prompt("Digite o Número de anos que ele fuma"));
let cigarro= parseInt(prompt("Digite o Número de cigarros fumados por dia"));
let preco= parseInt(prompt("Digite o preco da carteira com 20 cigarros"));

let conta

conta=(cigarro*(anos*365))*(preco/20)

document.write("Ele Gastou ",conta)