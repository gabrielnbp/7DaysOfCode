let num = Math.floor(Math.random() * (2 - 0) + 0);
let cont = 0;

let resp = prompt('Tente advinhar o número... Qual valor você deseja chutar?')
if(resp != num) {
    while(resp != num) {
        alert('Você ainda não conseguiu acertar o número. Tente novamente!')
        resp = prompt('Qual valor você deseja chutar?')
        cont++
        if(resp == num) {
            alert(`Parabéns, você acertou! O número era ${num}`)
            break
        } else if(cont == 2) {
            alert(`Que pena... Você não conseguiu acertar. O número era ${num}`)
            break
        }
    }
} else if(resp == num) {
    alert(`Parabéns, você acertou! O número era ${num}`)
}