let Frutas = [];
let Laticínios = [];
let Congelados = [];
let Doces = [];

let adicionar = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda 'sim' ou 'não'.");
if (adicionar == 'sim') {
    while (adicionar == 'sim') {
        let comida = prompt('Qual comida você deseja inserir?');
        let categoria = prompt("Em qual dessas categorias essa comida se encaixa: 'Frutas', 'Laticínios', 'Congelados' ou 'Doces'?")
        if (categoria == 'Frutas') {
            Frutas.push(comida)
        } else if (categoria == 'Laticínios') {
            Laticínios.push(comida)
        } else if (categoria == 'Congelados') {
            Congelados.push(comida)
        } else if (categoria == 'Doces') {
            Doces.push(comida)
        }
        adicionar = prompt('Deseja adicionar mais alguma comida?')
        if (adicionar == 'não') {
            remover = prompt('Deseja remover algum item da lista?')
            if (remover == 'não') {
                alert('Tudo bem então...A sua lista de compras ficou assim:')
                console.log('Lista de Compras:')
                console.log(`Frutas: ${Frutas}`)
                console.log(`Laticínios: ${Laticínios}`)
                console.log(`Congelados: ${Congelados}`)
                console.log(`Doces: ${Doces}`)
                break
            } if (remover == 'sim') {
                catRem = prompt('De qual categoria, o item será removido?')
                console.log('Lista de Compras:')
                console.log(`Frutas: ${Frutas}`)
                console.log(`Laticínios: ${Laticínios}`)
                console.log(`Congelados: ${Congelados}`)
                console.log(`Doces: ${Doces}`)
                if ((catRem == 'Frutas')) {
                    itemRem = prompt('Qual item deseja remover?')
                    Frutas.splice(Frutas.indexOf(itemRem), 1)
                    alert('Agora, a sua lista de compras ficou desta forma:')
                    console.log('Lista de Compras:')
                    console.log(`Frutas: ${Frutas}`)
                    console.log(`Laticínios: ${Laticínios}`)
                    console.log(`Congelados: ${Congelados}`)
                    console.log(`Doces: ${Doces}`)
                    if ((catRem == 'Laticínios')) {
                        itemRem = prompt('Qual item deseja remover?')
                        Laticínios.splice(Laticínios.indexOf(itemRem), 1)
                        alert('Agora, a sua lista de compras ficou desta forma:')
                        console.log('Lista de Compras:')
                        console.log(`Frutas: ${Frutas}`)
                        console.log(`Laticínios: ${Laticínios}`)
                        console.log(`Congelados: ${Congelados}`)
                        console.log(`Doces: ${Doces}`)
                    }
                    if ((catRem == 'Congelados')) {
                        itemRem = prompt('Qual item deseja remover?')
                        Congelados.splice(Congelados.indexOf(itemRem), 1)
                        alert('Agora, a sua lista de compras ficou desta forma:')
                        console.log('Lista de Compras:')
                        console.log(`Frutas: ${Frutas}`)
                        console.log(`Laticínios: ${Laticínios}`)
                        console.log(`Congelados: ${Congelados}`)
                        console.log(`Doces: ${Doces}`)
                    }
                    if ((catRem == 'Doces')) {
                        itemRem = prompt('Qual item deseja remover?')
                        Doces.splice(Doces.indexOf(itemRem), 1)
                        alert('Agora, a sua lista de compras ficou desta forma:')
                        console.log('Lista de Compras:')
                        console.log(`Frutas: ${Frutas}`)
                        console.log(`Laticínios: ${Laticínios}`)
                        console.log(`Congelados: ${Congelados}`)
                        console.log(`Doces: ${Doces}`)
                    }
                } else if ((catRem !== 'Frutas') || (catRem !== 'Laticínios') || (catRem !== 'Congelados') || (catRem !== 'Doces')) {
                    alert('Não foi possível encontrar a categoria informada!')
                }

            }

        }
    }
} else if (adicionar == 'não') {
    alert('Tudo bem então... Volte outra hora!')
}