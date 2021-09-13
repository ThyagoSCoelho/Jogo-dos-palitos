var quantidade, TesteDeJogo = 0, JogadaDaMaquina = 0, JogadaMaxima = 3, parametro = 0, numeroRet = 0;
    
function interfaceInicial(){
    document.getElementById("interface").style.display= 'block';
    document.getElementById("maquina").innerHTML = "O jogo ja vai começar..Pronto?!";
    
    document.getElementById("placar").style.display= 'block';
    document.getElementById("total").innerHTML = "Total de Palitos: "
    
    //esconde interface do iniciar do jogo
    document.getElementById("inicio").style.display = 'none';
}

function comecar(){
     quantidade = document.getElementById("palitos").value;
    if(quantidade <= 30 && quantidade >=20){
    
    //mostra interface do jogo
    interfaceInicial()


    //Machine pensando Calculando       
    TesteDeJogo = quantidade % (3 + 1);
    JogadaDaMaquina = JogadaMaxima;

    //Filtros para jogadas impossiveis de Machine
     if(TesteDeJogo !== 1 && TesteDeJogo !== 0)
     {
        JogadaDaMaquina = TesteDeJogo - 1;
     }
    
    quantidade = quantidade - JogadaDaMaquina;
    setTimeout(function() {
        document.getElementById("bntRetirar").style.display = 'inline-block';
        document.getElementById("maquina").innerHTML = "- Maquina retira " + JogadaDaMaquina;
        document.getElementById("total").innerHTML = "Total de Palitos: " + quantidade;
    }, 3000)  
    }
    else{
        numeroInvalido();
        return;
    }
}

function retirar(){
    document.getElementById("maquina").innerHTML = "";
    
    document.getElementById("bntRetirar").style.display = 'none';
    numeroRet = document.getElementById("retirados").value;
    if(numeroRet <= 3 && numeroRet >=1){
      quantidade = quantidade - numeroRet;  
    }
    else{
        numeroInvalido()
        return;
    }
    
    document.getElementById("player").innerHTML = "- Você retirou " + numeroRet;
    document.getElementById("total").innerHTML = "Total de Palitos: " + quantidade;
    
    if(quantidade >= 1){
        
        //Machine pensando Calculando       
        TesteDeJogo = quantidade % (3 + 1);
        JogadaDaMaquina = JogadaMaxima;

        //Filtros para jogadas impossiveis de Machine
        if(TesteDeJogo !== 1 && TesteDeJogo !== 0)
        {
            JogadaDaMaquina = TesteDeJogo - 1;
        }
        quantidade = quantidade - JogadaDaMaquina;
        
            if(quantidade >= 1){
            
                setTimeout(function(){
                    document.getElementById("bntRetirar").style.display = 'inline-block';
                    document.getElementById("maquina").innerHTML = "- Maquina retira " + JogadaDaMaquina;
                    document.getElementById("total").innerHTML = "Total de Palitos: " + quantidade;
                },1000)
            }
            else{
                ganhou()
                return;
            }

    }
    else{
        perdeu()
    }

}

function ganhou(){
    setTimeout(function(){
                    document.getElementById("maquina").innerHTML = "- Maquina retira 1 ";
                    document.getElementById("total").style.textAlign = 'center'
                    document.getElementById("total").innerHTML = "Você venceu!!";

                    document.getElementById("bntRetirar").style.display = 'none';
                    document.getElementById("restart").style.display = 'block'
            
                }, 1000)
}

function perdeu(){
        document.getElementById("player").innerHTML = "- Você retirou " + numeroRet;
        
        document.getElementById("total").style.textAlign = 'center'
        document.getElementById("total").innerHTML = "Você perdeu!! ";
        
        document.getElementById("bntRetirar").style.display = 'none';
        document.getElementById("restart").style.display = 'block'

}

function numeroInvalido(){
        alert("Numero invalido")
        document.getElementById("bntRetirar").style.display = 'inline-block';
        document.getElementById("retirados").value = 0;
        document.getElementById("maquina").innerHTML = "- Maquina está aguardando!";

}

function sim(){
    location.reload();
}

function nao(){	
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('interface').style.display = 'none';
    document.getElementById('conversa').style.display = 'none';
    document.getElementById('placar').style.display = 'none';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('final').style.display = 'block';
    
}
function voltar(){
    location.reload();
}