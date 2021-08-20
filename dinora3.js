function personagemDinora(){

    var escolha = ""
    
        while(true){
    
        escolha = prompt ("1 - Tenta se curar das queimaduras? \n2 - Tenta seguir para o seu objetivo?");
    
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