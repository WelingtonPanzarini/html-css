let submitBtn = document.querySelector('#enviar'), changeBtn = document.querySelector("#change")

submitBtn.addEventListener('click', () => {
    let n1 = document.querySelector('#n1'),
        n2 = document.querySelector('#n2'),
        n3 = document.querySelector('#n3'),
        n4 = document.querySelector('#n4'),
        res = document.querySelector('#resultado')


    let n1V = n1.value, n2V = n2.value, n3V = n3.value, n4V = n4.value
    let conds = [n1, n2, n3, n4]
    for (i = 0; i < conds.length; i++) {
        if (conds[i].value == "") {
            console.log(conds[i])

            conds[i].classList.add('borderVermelha')
            conds[i].placeholder = "Informe uma nota"

        }
    }

    if (n1V <= 10 && n2V <= 10 && n3V <= 10 && n4V <= 10) {
        let med = (parseInt(n1V) + parseInt(n2V) + parseInt(n3V) + parseInt(n4V)) / 4
        if (med > 10) {
            alert("A media não pode ser superior a 10!")
        }
        if (med > 4.5 && med < 6) {
            res.innerText = "Recuperação, Sua nota é : " + med
        } else if (med < 4.5) {
            res.innerText = "Reprovado. Sua nota final foi: " + med
        } else {
            res.innerText = "Aprovado. Sua nota final foi: " + med
        }
    } else {
        alert("As notas só podem ter valores até no máximo 10.")
    }


})

document.querySelector('#ns').addEventListener('onkeypressed', (e) => {
    if (e.keycode == 13) {
        console.log('tomadescar')
    }
})


changeBtn.addEventListener('click', () => {
    document.querySelector('#cont1').classList.toggle('hide')
    document.querySelector('#cont2').classList.toggle('hide')

       // < button id = "change" > Trocar</button >

})