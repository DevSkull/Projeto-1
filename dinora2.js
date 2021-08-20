function personagemDinora(){

    var escolha = ""
    
        while(true){
    
        escolha = prompt ("1 - Receber os ataques, pois você pode aguentar? \n2 - Bate as asas enquanto profere uma magia?");
    
        if (escolha == 1){
    
         window.location.href = "../consequencias.html"
      }
    
        else if (escolha == 2){ window.location.href="./dinora3.html"
      }
        else{
            alert ("Responda apenas com 1 ou 2 !!!")
        }
    break
    }
    }