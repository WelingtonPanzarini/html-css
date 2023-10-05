function calcular(){
    var n1 = document.getElementById("n1").value;            
    var n2 = document.getElementById("n2").value;           
    var n3 = document.getElementById("n3").value;            
    var n4 = document.getElementById("n4").value;            
    
    var s3 = (Number(n1)+Number(n2)+Number(n3)+Number(n4))/4;            
               
    if(n1!=0 && n2!=0 && n3!=0 && n4!=0){
        if (n1 <= 10 && n2 <= 10 && n3 <= 10 && n4 <= 10) {               
        if(s3>4.5 && s3<6){
                document.getElementById("s3").innerHTML="Sua nota é "+s3+" e de Recuperação! " ;
            }else if(s3<4.5){
                document.getElementById("s3").innerHTML= "Sua nota é "+s3+" e Reprovado!" ;
            }else{
                document.getElementById("s3").innerHTML="Sua nota é "+s3+" e Aprovado!" ;
            }                   
             
        } else {
            alert("As notas só podem ser até 10")
        }
    }else{
        document.getElementById("s3").innerHTML="O valor não pode ser Nulo!";
        document.getElementById("s3").style.border ="2px solid red";
        alert("As notas não podem ter valores nulos")
        }
    }             
