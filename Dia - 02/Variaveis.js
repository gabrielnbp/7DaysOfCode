const nome = prompt('Qual o seu nome?');
const idade = prompt('Quantos anos você tem?');
const lang = prompt('Qual linguagem de programação você está estudando?');
const msg = (`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${lang}!`);

alert(msg);

const resp = prompt(`Você gosta de estudar ${lang}? Responda com o número 1 para SIM ou 2 para NÃO.`)
    if(resp == 1) {
        alert('Muito bom! Continue estudando e você terá muito sucesso.')
    } else {
        alert('Ahh que pena... Já tentou aprender outras linguagens?')
    }    

