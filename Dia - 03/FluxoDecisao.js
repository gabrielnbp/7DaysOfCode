let area = prompt('Você deseja seguir para área de Front-End ou Back-End?')
if(area == 'Front-End') {
    let subarea = prompt('Na área de Front-End, você deseja aprender React ou Vue?')
} else if(area == 'Back-End') {
    let subarea = prompt('Na área de Back-end, você deseja aprender C# ou Java?')
} else if(subarea == 'React') {
    let msg = (`Entendi... Então você deseja seguir a área ${area} e aprender ${subarea}.`)
    alert(msg)
} else if(subarea == 'Vue') {
    let msg = (`Entendi... Então você deseja seguir a área ${area} e aprender ${subarea}.`)
    alert(msg)
} else if(subarea == 'C#') {
    let msg = (`Entendi... Então você deseja seguir a área ${area} e aprender ${subarea}.`)
    alert(msg)
} else if(subarea == 'Java') {
    let msg = (`Entendi... Então você deseja seguir a área ${area} e aprender ${subarea}.`)
    alert(msg)
}


let espec = ('A partir disso, você continuará na área escolhida ou deseja se tornar um fullstack?')
if(espec == 'área escolhida') {
    const resp1 = (`Então você deseja continuar na ${espec}`)
    alert(resp1)
} else if(espec == 'fullstack') {
    const resp2 = (`Então você deseja se tornar um ${espec}`)
    alert(resp2)
}


while(escolha > 'sim') {
    let tec = prompt('Por fim... Quais as outras tecnologias que gostaria de se especializar ou conhecer?')
    let escolha = ('Tem mais alguma tecnologia que você gostaria de aprender?')
}