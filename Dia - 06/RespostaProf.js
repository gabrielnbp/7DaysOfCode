let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";
let remover = "";
let adicionarMais = "sim"; //valor inicial como 'sim', porque a primeira vez sempre vai entrar no 'while'

while(adicionarMais != "não") {
    if((frutas.length === 0) && (laticinios.length === 0) && (doces.length === 0) && (congelados.length === 0)) {
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda com 'sim' ou 'não'.");
    } else {
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda com 'sim', 'não' ou 'remover'.");
    }

    while((adicionarMais != "sim") && (adicionarMais != "não") && (adicionarMais != "remover")) {
        alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }

    if(adicionarMais === "não") { //se o texto lido for 'não', sair do while
        break;
    }

    if(adicionarMais === "sim") {
        comida = prompt("Qual comida você deseja inserir?");
        categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticinios', 'doces' ou 'congelados'?");
        if(categoria === 'frutas') {
            frutas.push(comida);
        } else if(categoria === 'laticinios') {
            frutas.push(comida);
        } else if(categoria === 'doces') {
            frutas.push(comida);
        } else if(categoria === 'congelados') {
            congelados.push(comida);
        } else {
            alert("Essa categoria não foi pré-definida!");
        } 
    } else if(adicionarMais === "remover") {
        //se a lista estiver vazia (tratamento de bug, caso a pessoa digite "remover" mesmo quando forem exibidos apenas as opções "sim" e "não")
        if((frutas.length === 0) && (laticinios.length === 0) && (doces.length === 0) && (congelados.length === 0)) { 
            alert(`A lista está vazia!`);
        } else { //se a lista não estiver vazia
            remover = prompt(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}\n\n Qual produto você deseja remover?`);
            if(frutas.indexOf(remover) != -1) {
                frutas.splice(frutas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if(laticinios.indexOf(remover) != -1) {
                laticinios.splice(laticinios.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if(doces.indexOf(remover) != -1) {
                doces.splice(doces.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else if(congelados.indexOf(remover) != -1) {
                congelados.splice(doces.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`);
            } else {
                alert(`Não foi possível encontrar o item dentro da lista!`);
            }
        }
    }
}

alert(`Lista de Compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}`);

