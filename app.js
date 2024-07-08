

let numeroSecreto = 0;
let intentos= 0;
let listNumerosSorteados=[];
let numeroMaximo = 10;

function asignarTextoElmento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElmento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);        
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElmento('p','El número secreto es menor');
        }else if(numeroDeUsuario<numeroSecreto){
            asignarTextoElmento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarcaja();
    }
    return;
}


function limpiarcaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value='';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listNumerosSorteados);
    if (listNumerosSorteados.length >= numeroMaximo) {
        asignarTextoElmento('p','Ya se sortearon todos los números');
    } else {
        if (listNumerosSorteados.includes(numeroGenerado)) {
            console.log('Entró al if - Número ya existe:', numeroGenerado);
            return generarNumeroSecreto();
        } else {
            console.log('Número agregado a la lista:', numeroGenerado);
            listNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElmento('h1','Juego Del Número Secreto!!');
    asignarTextoElmento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego(){
    limpiarcaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
