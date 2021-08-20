function personagemLucian(){

    var escolha = ""
    
        while(true){
    
        escolha = prompt ("1 - Seguir em frente com mais velociade? \n2 - Fechar as asas para se proteger?");
    
        if (escolha == 1){
    
         window.location.href = "./lucian2.html"
      }
    
        else if (escolha == 2){ window.location.href="../consequencias.html"
      }
        else{
            alert ("Responda apenas com 1 ou 2 !!!")
        }
    break
    }
    }