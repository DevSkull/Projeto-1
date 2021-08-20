function personagemUliana(){

    var escolha = ""
    
        while(true){
    
        escolha = prompt ("1 - Enfrentar a ventania? \n2 - Descer alguns metros?");
    
        if (escolha == 1){
    
         window.location.href = "../consequencias.html"
      }
    
        else if (escolha == 2){ window.location.href="./uliana2.html"
      }
        else{
            alert ("Responda apenas com 1 ou 2 !!!")    
        }
    break
    }
    }