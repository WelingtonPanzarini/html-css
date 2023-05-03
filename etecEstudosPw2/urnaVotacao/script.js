function inserir(valor) {
    //recebe os valores dos campos 1 e 2
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;
    //se valor1 vazio receba o valor do campo1
    if (valor1 == "") {
        document.getElementById("campo1").value = valor;
    //senão vá para o valor2 e receba valor do campo2
    } else if (valor2 == "") {
        document.getElementById("campo2").value = valor;
    }
}

function corrige() {
    //corrige o valor dos campos 1 e 2 com vazio
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}

function votar() {
    //valores 1 e 2 recebem os valores respectivos dos campos 1 e 2
    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);
   
    var candidato = (valor1 * 10) + valor2;
    //valor1 X 10 garante a casa decimal + valor2
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
function resultado() {
    document.getElementById("resultado").innerHTML = ""
    for (i = 0; i < 100; i++) {
        if (sessionStorage.getItem(i) !== null) {
            document.getElementById("resultado").innerHTML += "Candidato  " + i + " tem "
                + sessionStorage.getItem(i) + " votos<br/>" //.innerHTML=innerHTML+"Candidato"+i+...
                //Aqui limpa os votos computados 
                //sessionStorage.clear("votos");     

        }
    }
}
function branco() {
    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);    
   
    var nulo = (valor1 * 10) + valor2;
    if (sessionStorage.getItem(nulo) !== null) {
        nulo = parseInt(sessionStorage.getItem(nulo)) + 1;
        sessionStorage.setItem(nulo, nulo);   
    } else {
        sessionStorage.setItem(nulo, 1);
    }
    alert("Confirmado voto em Branco ")
    document.getElementById("campo1").value = " ";
    document.getElementById("campo2").value = " "; 
    
}
