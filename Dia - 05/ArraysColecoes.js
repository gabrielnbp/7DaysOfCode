let Frutas = [];
let Laticínios = [];
let Congelados = [];
let Doces = [];

let adicionar = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda 'sim' ou 'não'.");
if(adicionar == 'sim') {
    while(adicionar == 'sim') {
        let comida = prompt('Qual comida você deseja inserir?');
        let categoria = prompt("Em qual dessas categorias essa comida se encaixa: 'Frutas', 'Laticínios', 'Congelados' ou 'Doces'?")
        if(categoria == 'Frutas') {
            Frutas.push(comida)
        } else if(categoria == 'Laticínios') {
            Laticínios.push(comida)
        } else if(categoria == 'Congelados') {
            Congelados.push(comida)
        } else if(categoria == 'Doces') {
            Doces.push(comida)
        } 
        adicionar = prompt('Deseja adicionar mais alguma comida?')
        if(adicionar == 'não') {
            alert('Tudo bem então...A sua lista de compras ficou assim:')
            console.log('Lista de Compras:')
            console.log(`Frutas: ${Frutas}`)
            console.log(`Laticínios: ${Laticínios}`)
            console.log(`Congelados: ${Congelados}`)
            console.log(`Doces: ${Doces}`)
            break
        }
    }
} else if(adicionar == 'não') {
    alert('Tudo bem então... Volte outra hora!')
}