function personagemLucian(){

    var escolha = ""
    
        while(true){
    
        escolha = prompt ("1 - Vai tentar tirar a flecha? \n2 - Vai seguir para a cidade?");
    
        if (escolha == 1){
    
         window.location.href = "../consequencias.html"
      }
    
        else if (escolha == 2){ window.location.href="../finalgeral.html"
      }
        else{
            alert ("Responda apenas com 1 ou 2 !!!")
        }
    break
    }
    }