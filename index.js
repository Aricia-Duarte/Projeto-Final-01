/*DECLARAÇÃO DE VARIÁVEIS GLOBAIS COM BANCO DE DADOS DAS PALAVRAS POSSÍVEIS*/
var  produto = ['FOGAO', 'ARMARIO', 'LIQUIDIFICADOR', 'SOFA', 'COMPUTADOR', 'CAMA', 'GELADEIRA'];
var  dica1 = ['Tem boca, mas não beija', 'Normalmente é de madeira', 'Precisa de energia', 'Tem na sala', 'Inteligência artificial', 'Pode ser dura ou macia', 'Tem na cozinha'];
var  dica2 = ['Se ligar fica quente', 'Tem divisões', 'Mistura alimentos', 'É macio', 'Tem tela', 'Formato de retângulo', 'Se ligar fica fria'];
var  dica3 = ['Utilizado para preparar alimentos', 'Usado para guardar coisas', 'Também utilizado para triturar', 'Usado para sentar', 'Utilizado para estudo/trabalho', 'Utilizada para dormir', 'Utilizado para mater alimentos'];
var item = Math.floor(Math.random() * produto.length);
var sorteado = produto[item];
var tracos_sorteado = '';
var desconto = 50;
var dicaatual = 0;
console.log(sorteado);
console.log(desconto);


/*ATIVA O TECLADO DE LETRAS NA TELA APÓS O INÍCIO DO JOGO*/
function aciona_teclas(){
    var teclado = document.querySelector('.quadroTeclas');
    teclado.innerHTML = `
        <div class = "quadroletras">
            <button class = 'teclado' id = 'botaoA' onclick='letraEscolhida(id)'>A</button>
            <button class = 'teclado' id = 'botaoB' onclick='letraEscolhida(id)'>B</button>
            <button class = 'teclado' id = 'botaoC' onclick='letraEscolhida(id)'>C</button>
            <button class = 'teclado' id = 'botaoD' onclick='letraEscolhida(id)'>D</button>
            <button class = 'teclado' id = 'botaoE' onclick='letraEscolhida(id)'>E</button>
            <button class = 'teclado' id = 'botaoF' onclick='letraEscolhida(id)'>F</button>
            <button class = 'teclado' id = 'botaoG' onclick='letraEscolhida(id)'>G</button>
            <button class = 'teclado' id = 'botaoH' onclick='letraEscolhida(id)'>H</button>
            <button class = 'teclado' id = 'botaoI' onclick='letraEscolhida(id)'>I</button>
            <button class = 'teclado' id = 'botaoJ' onclick='letraEscolhida(id)'>J</button>
            <button class = 'teclado' id = 'botaoK' onclick='letraEscolhida(id)'>K</button>
            <button class = 'teclado' id = 'botaoL' onclick='letraEscolhida(id)'>L</button>
            <button class = 'teclado' id = 'botaoM' onclick='letraEscolhida(id)'>M</button>
            <button class = 'teclado' id = 'botaoN' onclick='letraEscolhida(id)'>N</button>
            <button class = 'teclado' id = 'botaoO' onclick='letraEscolhida(id)'>O</button>
            <button class = 'teclado' id = 'botaoP' onclick='letraEscolhida(id)'>P</button>
            <button class = 'teclado' id = 'botaoQ' onclick='letraEscolhida(id)'>Q</button>
            <button class = 'teclado' id = 'botaoR' onclick='letraEscolhida(id)'>R</button>
            <button class = 'teclado' id = 'botaoS' onclick='letraEscolhida(id)'>S</button>
            <button class = 'teclado' id = 'botaoT' onclick='letraEscolhida(id)'>T</button>
            <button class = 'teclado' id = 'botaoU' onclick='letraEscolhida(id)'>U</button>
            <button class = 'teclado' id = 'botaoV' onclick='letraEscolhida(id)'>V</button>
            <button class = 'teclado' id = 'botaoW' onclick='letraEscolhida(id)'>W</button>
            <button class = 'teclado' id = 'botaoX' onclick='letraEscolhida(id)'>X</button>
            <button class = 'teclado' id = 'botaoY' onclick='letraEscolhida(id)'>Y</button>
            <button class = 'teclado' id = 'botaoZ' onclick='letraEscolhida(id)'>Z</button>
        </div>
    `  
}
/*PICOTA AS PALAVRAS PARA COLOCAR NA TELA*/
function atualizaTela(palavra, vrDesconto){
    var palavrapicotada = ''
    for(i=0;i<palavra.length;i++){
        palavrapicotada = palavrapicotada + palavra[i]+ " " 
    }
    var palavraoculta = document.querySelector('.palavraoculta');
    palavraoculta.innerText = palavrapicotada
    var descontela = vrDesconto + "%"
    var pontos = document.querySelector('.calculopontuacao');
    pontos.innerText = descontela
}


/*PREPARA O INÍCIO DO JOGO*/
function iniciar(){
    var botaoIniciar = document.querySelector('.botaoconfirmar');
    botaoIniciar.remove();
    var fraseInicial = document.querySelector('.fraseInicial')
    fraseInicial.remove()
    var lugardicas = document.querySelector('.lugardicas')
    lugardicas.innerHTML = `<img class="imgideia" src="ideia.png" >
    <button class = "botaodicas" onclick="dicas()">Dicas</button>`
    var tracos = sorteado.length;
    for(var i=0; i<tracos; i++){
        tracos_sorteado = tracos_sorteado + '_';
    }
    atualizaTela(tracos_sorteado,desconto);
    aciona_teclas();
}

/*FUNÇÃO DA VITÓRIA*/
function venceu(){
    console.log("venceu")
    var quadro = document.querySelector('.quadroTeclas');
    quadro.remove();
    var frase = document.querySelector('#fraseFinal');
    frase.innerText = "Parabéns você ganhou " + desconto + "% de desconto!";
    var botaodicas = document.querySelector('.dicastotal')
    botaodicas.remove()
}

/*FUNÇÃO DA DERROTA*/
function perdeu(){
    console.log("perdeu")
    var quadro = document.querySelector('.quadroTeclas');
    quadro.remove();
    var frase = document.querySelector('#fraseFinal');
    frase.innerText = "Infelizmente não foi desta vez! Tente novamente!";
    var botaodicas = document.querySelector('.dicastotal')
    botaodicas.remove()
}

/*FUNÇÃO PARA VALIDAR AS LETRAS DIGITADAS*/

function letraEscolhida(botao){
    var palavra_atual = '';
    var letra = '';
    var erro = true;
    letra = botao[5];
    for(var i=0; i < tracos_sorteado.length; i++ ){
        if(sorteado[i]==letra){
            palavra_atual = palavra_atual + letra;
            erro = false
        }
        else{
            palavra_atual = palavra_atual + tracos_sorteado[i];
        }        
    }
    tracos_sorteado = palavra_atual;
    if(erro){
        desconto = desconto - 10;
    }
    atualizaTela(tracos_sorteado, desconto)
    if(tracos_sorteado == sorteado){
        venceu()
    }
    else if(desconto==0){
        perdeu()
    }
    var botaoLetra = document.querySelector('#'+ botao);
    botaoLetra.remove();
}

function dicas(){
    if(dicaatual == 0){
        var dica = document.querySelector('#dica1')
        dica.innerText = dica1[item]
        dicaatual = dicaatual + 1
        desconto = desconto - 10
    }
    else if(dicaatual == 1){
        var dica = document.querySelector('#dica2')
        dica.innerText = dica2[item]
        dicaatual = dicaatual + 1
        desconto = desconto - 10
    }
    else if(dicaatual == 2) {
        var dica = document.querySelector('#dica3')
        dica.innerText = dica3[item]
        dicaatual = dicaatual + 1
        desconto = desconto - 10
    }
    atualizaTela(tracos_sorteado, desconto)
    if(tracos_sorteado == sorteado){
        venceu()
    }
    else if(desconto==0){
        perdeu()
    }
}
