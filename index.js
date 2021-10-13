

/*hola();
como();
adios();


function hola (){
    console.log("Hola")
}  
function como () {
    console.log("Como estas?")
}
function adios (){
    console.log("bye")
}*/
//////////////////////////// return 
var n = nuevoNumero();
var x = 10;
var total = x + n;
console.log(total);
console.log(n);
function nuevoNumero(){
    let ok = 5
    return ok;
}
function nuevoNumero(){
    var numero = Math.floor(Math.random()*10)
    return numero;
}
console.log("Aleatorio: " + n);
console.log("constante: " + x)
/////////////////////////////////////////////// ejercicio 1
var mujeres = ["Martha, Maria, Sandra, Sonia"]
var hombres = ["Cristopher, Ren, Andrick, Eder"]
var tipo = prompt("Ingresa mujeres o hombres");
hola();
function hola(){
    if (tipo.toLowerCase() == "mujeres"){
        console.log(mujeres);
    }else{
        console.log(hombres);
    }
}
////////////////////////////////////////////////// ejercicio 2
var o = prompt("Ingresa una palabra cualquiera");
var letras = [];
arreglo(o);
function arreglo (o){  
      letras.push(o)
} 
console.log(letras);
/////////////////////////////////////////////////// ejercicio 3
arreglo();
function arreglo() {
var resultado = "";
do {
    var cadena = prompt("Introduce una cadena");
    if (resultado == "") {
        resultado = resultado + cadena;
    }
    else {
        resultado = resultado + "-" + cadena;
    }
} while (confirm("Desea seguir?"));
console.log(resultado);
}
///////////////////////////////////////////////// ejercicio 4
JugarDados();

        function JugarDados() {
            
            let Bandera1 = true

            alert("Hola vamos a jugar a los dados")
            
            Bandera1 = confirm("Vas a jugar con alguien mas?")
            let ban1 = true

            if (Bandera1 == true) {
                do{
                    VsPlayer();
                    ban1 = confirm("Deseas seguir jugando?")
                } while(ban1 == true)

            } else {
                do{
                    VsCom();
                    ban1 = confirm("Deseas seguir jugando?")
                } while(ban1 == true)
            }
           
        }

        function VsCom() {
            let nP = Math.floor(Math.random()*6)
            let nC = Math.floor(Math.random()*6)
            let Bandera = true
           
                alert("Te toca jugador")

            console.log("Sacaste: " + nP)


            alert("Turno de la COM:")
            console.log("COM: " + nC)

            if (nP > nC) {
                console.log("Tu ganas")
            } else {
                console.log("Tu pierdes")
            }

            
        }

        function VsPlayer() {
            let nP1 = Math.floor(Math.random()*6)
            let nP2 = Math.floor(Math.random()*6)
            let Bandera = true
           
           
                alert("Te toca jugador 1")

            console.log("Sacaste: " + nP1)


            alert("Turno del jugador 2:")
            console.log("Sacaste: " + nP2)

            if (nP1 > nP2) {
                console.log("Tu ganas jugador 1")
            } else {
                console.log("Tu ganas jugador 2")
            }

        }
//////////////////////////////////////////////////////////////////////////////// ejercicio 5
Caracola();

function Caracola() {
    var n = Math.floor(Math.random() * (5-1))
    switch(n){
        case 1:
            console.log("No");
            break;
        case 2: 
            console.log("Quizas");
            break;
        case 3:
            console.log("Definitivamente");
            break;
        case 4:
            console.log("Si");
            break;
        case 5: 
            console.log("Pregunta otra cosa");
            break;    
    }
}

