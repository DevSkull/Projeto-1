function personagemUliana(){

    var escolha = ""
    
        while(true){
    
        escolha = prompt ("1 - Enfrentar a sombra? \n2 - Tenta fugir?");
    
        if (escolha == 1){
    
         window.location.href = "../consequencias.html"
      }
    
        else if (escolha == 2){ window.location.href="./uliana3.html"
      }
        else{
            alert ("Responda apenas com 1 ou 2 !!!")    
        }
    break
    }
    }