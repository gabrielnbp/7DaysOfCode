let area = prompt('Você deseja seguir para área de Front-End ou Back-End?')
if (area == 'Front-End') {
    let subarea = prompt('Na área de Front-End, você deseja aprender React ou Vue?')
    if (subarea == 'React') {
        let msg = (`Entendi... Então você deseja seguir a área ${area} e aprender ${subarea}.`)
        alert(msg)
    } if (subarea == 'Vue') {
        let msg = (`Entendi... Então você deseja seguir a área ${area} e aprender ${subarea}.`)
        alert(msg)
    }
}

if (area == 'Back-End') {
    let subarea = prompt('Na área de Back-End, você deseja aprender C# ou Java?')
    if (subarea == 'C#') {
        let msg = (`Entendi... Então você deseja seguir a área ${area} e aprender ${subarea}.`)
        alert(msg)
    } if (subarea == 'Java') {
        let msg = (`Entendi... Então você deseja seguir a área ${area} e aprender ${subarea}.`)
        alert(msg)
    }
}

let espec = prompt('A partir disso, você continuará na área escolhida ou deseja se tornar um Fullstack?')
if (espec == 'área escolhida') {
    let resp1 = (`Escolher se manter na área ${area} não é uma má escolha, continue se especializando para melhorar cada vez mais!`)
    alert(resp1)
} if (espec == 'Fullstack') {
    let resp2 = (`Boa escolha! Se tornar um ${espec} não é fácil, porém tenho certeza que conseguirá!`)
    alert(resp2)
}


let escolha = prompt("Por fim... Existem outras tecnologias que gostaria de se especializar ou conhecer? Digite 'sim' em caso positivo ou 'não' em caso negativo.")
while (escolha === 'sim') {
    let novaTec = prompt('Qual?')
    alert(`${novaTec} é realmente uma boa linguagem para aprender!`)
    escolha = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'sim' em caso positivo ou 'não' em caso negativo.")   
}
alert('Que pena... Mas nunca deixe de sempre buscar novos conhecimentos')