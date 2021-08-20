function personagemDinora(){

    var escolha = ""
    
        while(true){
    
        escolha = prompt ("1 - Aumentar a sua velocidade e descer em direção à luz? \n2 - Tentar se esquivar?");
    
        if (escolha == 1){
    
         window.location.href = "../consequencias.html"
      }
    
        else if (escolha == 2){ window.location.href="./dinora2.html"
      }
        else{
            alert ("Responda apenas com 1 ou 2 !!!")
        }
    break
    }
    }