// Console output

console.log("Olá Mundo!");

/*
var   nome 	= "Guilherme"; 	// Var para variaveis globais
let   carro = "Ferrari"; 	// Let apenas para variaveis locais
const preco = 19999.99; 	// Constante não pode ser alterada

console.log(nome);
console.log(carro);
console.log(preco);
*/

// Concatenando strings normais
let nome1 = "Guilherme";
let sobrenome1 = "Vesco";
let nomeCompleto1 = nome1 + " " + sobrenome1;

// Concatenando com Template String
let nome2 = "Guilherme";
let sobrenome2 = "Vesco";
let nomeCompleto2 = `Nome Completo: ${nome2} ${sobrenome2}`; // Usando crase no lugar de aspas

console.log(nomeCompleto2);

// If Else
let idade = 18;
verificarIdade();
function verificarIdade() {
	if (idade >= 18) {
		console.log("Maior de idade");
	}
	else
	{
		console.log("Menor de idade");
	}
}

// Funcoes //

function verde() {
	document.querySelector('#exemplo').classList.remove('azul')
	document.querySelector('#exemplo').classList.remove('vermelho')
	document.querySelector('#exemplo').classList.add('verde')
}

function vermelho() {
	document.querySelector('#exemplo').classList.remove('azul')
	document.querySelector('#exemplo').classList.remove('verde')
	document.querySelector('#exemplo').classList.add('vermelho')
}

function azul () {
	document.querySelector('#exemplo').classList.remove('verde')
	document.querySelector('#exemplo').classList.remove('vermelho')
	document.querySelector('#exemplo').classList.add('azul')
}




/*
document.write("Textando");
//alert("Olá mundo!");
console.log("mensagem exibida no console");

var x = 10;
var y = 5;
var total = x + y;
//alert ("A somal total é igual a " + total + ".");

var hora = 18;

if (hora == 12 || hora == 18) {
	console.log("HORA DO RUSH.");
} else {
	console.log("Horário comum.");
}


var nomecompleto = nome + sobrenome;
alert ("Seu nome completo é " + nomecompleto + ".")

document.getElementById('hOne').innerHTML = 'Ronaldo <button>Benjamin Botão</button>';

document.getElementsByClassName('lista')[0].innerHTML = 'Item alterado!';
*/