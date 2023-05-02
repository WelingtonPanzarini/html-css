function inserir(valor) {
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;

    if (valor1 == "") {
        document.getElementById("campo1").value = valor;
    } else if (valor2 == "") {
        document.getElementById("campo2").value = valor;
    }
}

function corrige() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}

function votar() {
    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);
   
    var candidato = (valor1 * 10) + valor2;
    if (sessionStorage.getItem(candidato) !== null) {
        votos = parseInt(sessionStorage.getItem(candidato)) + 1;
        sessionStorage.setItem(candidato, votos);   
    } else {
        sessionStorage.setItem(candidato, 1);
    }
    alert("Confirmado voto no candidato " + candidato)
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    
}
function resultado( ) {
    document.getElementById("resultado").innerHTML = ""
    for (i = 0; i < 100; i++) {
        if (sessionStorage.getItem(i) !== null) {
            document.getElementById("resultado").innerHTML += "Candidato  " + i + " tem "
                + sessionStorage.getItem(i) + " votos<br/>"       

        }
    }

}
/*function branco() {
    document.getElementById("resultado").innerHTML = ""
    for (i = 0; i < 100; i++) {
        if (sessionStorage.getItem(i) !== null) {
            document.getElementById("resultado").innerHTML += "Branco" + i + "tem"
                + sessionStorage.getItem(i) + "votos<br/>"
        }
    }
}*/