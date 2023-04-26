



let notas = notas;

// obter as quatro notas do usuário
for (let i = 0; i < 4; i++) {
notas.push(Number(prompt("Digite a nota " + (i + 1))));
}

// calcular a média das notas
let soma = 0;
for (let i = 0; i < notas.length; i++) {
soma += notas[i];
}
let media = soma / notas.length;

// exibir a média para o usuário
alert("A média das notas é " + media.toFixed(2));

document.querySelector('#ns').addEventListener('onkeypressed', (e) => {
    if(e.keycode == 13) {
     console.log('tomadescar')
    }
    })


changeBtn.addEventListener('click', () => {
    document.querySelector('#cont1').classList.toggle('hide')
    document.querySelector('#cont2').classList.toggle('hide')
})