function reinicioJaba(){

    var escolha = ""
    
        while(true){
    
        escolha = prompt ("1 - Adotar um filhote \n(Futuramente terá integração com páginas fora do jogo) \n2 - Sair ");
    
        if (escolha == 1){
    
         window.location.href = "./index.html"
      }
    
        else if (escolha == 2){ window.location.href="./index.html"
      }
        else{
            alert ("Responda apenas com 1 ou 2 !!!")    
        }
    break
    }
    }