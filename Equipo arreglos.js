//Ingrese datos
var nombreU = prompt("Ingrese nombre de usuario")
var nombreP = prompt("Ingrese su nombre de pila")
var apellidoP = prompt("Ingrese su apellido paterno")
var apellidoM = prompt("Ingrese su apellido materno")
var sexo = prompt("Ingrese su sexo, M o F")
var generoFav = prompt("Ingresa tu genero musical favorito")
var interprete = prompt("Ingresa el nombre de tu interprete favorito")
var sopaP = prompt("Ingresa tu sopa de pasta favorita")
var depoFav = prompt("Ingrese su deporte favorito")
var depoPPref = prompt("Ingrese cual football prefiere, si americano o soccer")
var colorfav = prompt ("Ingresa cual es tu color favorito") 
var colordis = prompt ("Ingresa el color que menos te gusta")
var tecladofav = prompt ("Prefieres teclado de membrana o mecanico?")
var switchfavorito = prompt ("Cual es tu Switch favorito si es que te gustan los mecanicos")
var recomendacion = ""
//Arreglo
var datos = {
    "Nombre Usuario": nombreU,
    "Nombre":{
        "Nombre de pila": nombreP,
        "Apellido paterno" : apellidoP,
        "Apellido materno" : apellidoM,
        "Sexo" : sexo

    },
    "Musica": {
        "Genero": generoFav,
        "Interprete" : interprete
    },
    "Comida": {
        "Sopas": {
            "Pasta": sopaP
        }
    },
    "Deporte":{
        "Dporte Favorito": depoFav,
        "De pelota": {
            "Football": depoPPref

        }
    },
    "Color": {
        "Color favorito": colorfav,
        "Color que menos te gusta": colordis
    },
    "Teclado": {
        "Teclado favorito": tecladofav,
        "Switch favorito" : switchfavorito
    }
}

if(sexo == "M"){
    console.log("Bienvenido")
} else {
    console.log("Bienvenida")
}
console.log(datos["Nombre Usuario"]);
switch (generoFav) {
    case "Rock":
        console.log("Te recomendamos AC/DC")
        break;
    case "rock":
        console.log("Te recomnedamos Linkin Park")
        break;
    default: "Te recomendamos a The Beatles"
        break;
}
switch (depoFav) {
    case "Futbol":
        console.log("Te recomendamos los tenis del CR7")
        break;
    case "Basquetbol":
        console.log("Te recomendamos los tenis air jordan 9")
        break;
    default: 
    console.log("Te recomendamos nuestra toalla deportiva")
        break;
}
switch (colorfav){
    case "verde":
        console.log("El verde es un color bonito")
        break;
    case "rojo":
        console.log("El rojo es un color bonito")
        break;
    case "amarillo": 
        console.log("El amarillo es un color bointo")
        break;
    case "azul":
        console.log("El azul es un color bonito")
        break;
    case "cafre":
        console.log("El cafe es un color bonito")
        break;
}
switch (colordis){
    case "verde":
        console.log("El verde es un color feo")
        break;
    case "rojo":
        console.log("El rojo es un color feo")
        break;
    case "amarillo": 
        console.log("El amarillo es un color feo")
        break;
    case "azul":
        console.log("El azul es un color feo")
        break;
    case "cafre":
        console.log("El cafe es un color feo")
        break;
}
switch (tecladofav){
    case "membrana":
        console.log("Te recomiendo probar los mecanicos")
        break;
    case "mecanico":
        console.log("Tienes buen gusto")
        if (tecladofav == "mecanico"){
            switch (switchfavorito){
                case "blue":
                    console.log("Tienen un sonido espectacular")
                    break;
                case "red":
                    console.log("Asi que no te gustan los teclados ruidosos")
                    break;
                case "brown":
                    console.log("Es un switch interesante")
                    break;
            }
            
        }
        break;
}


