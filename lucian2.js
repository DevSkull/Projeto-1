function personagemLucian(){

    var escolha = ""
    
        while(true){
    
        escolha = prompt ("1 - Bater as asas para afastar a poeira? \n2 - Tenta fugir?");
    
        if (escolha == 1){
    
         window.location.href = "./lucian3.html"
      }
    
        else if (escolha == 2){ window.location.href="../consequencias.html"
      }
        else{
            alert ("Responda apenas com 1 ou 2 !!!")
        }
    break
    }
    }