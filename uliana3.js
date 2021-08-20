function personagemUliana(){

    var escolha = ""
    
        while(true){
    
        escolha = prompt ("1 - Seguir em frente? \n2 - Fica parada para não sentir mais dor?");
    
        if (escolha == 1){
    
         window.location.href = "../finalgeral.html"
      }
    
        else if (escolha == 2){ window.location.href="../consequencias.html"
      }
        else{
            alert ("Responda apenas com 1 ou 2 !!!")    
        }
    break
    }
    }