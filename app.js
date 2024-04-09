function encriptar(){
    let texto = document.getElementById("textoEncriptado").value;
    let textoEncriptado = "";
    let hayMayusculas=false;

    for(let i = 0;i < texto.length;i++){
        if(texto[i] == texto[i].toUpperCase() && texto[i] != texto[i].toLowerCase()){
            textoEncriptado = "No se aceptan mayusculas ni carateres especiales";
            hayMayusculas=true;
            document.getElementById("texto-encriptado").innerHTML = textoEncriptado;
            break;
        }
    }

    if(hayMayusculas == false){
            textoEncriptado = texto.replace(/e/mg, "enter");
            textoEncriptado = textoEncriptado.replace(/i/mg, "imes");
            textoEncriptado = textoEncriptado.replace(/a/mg, "ai");
            textoEncriptado = textoEncriptado.replace(/o/mg, "ober");
            textoEncriptado = textoEncriptado.replace(/u/mg, "ufat");

            document.getElementById("contenedor-subtitulo").style.display = "none";
            document.getElementById("texto-encriptado").innerHTML = textoEncriptado;
            document.getElementById("botonCopiar").style.display = "show";
            document.getElementById("botonCopiar").style.display = "inherit";
    }
}

function desencriptar(){
    let texto = document.getElementById("textoEncriptado").value;


    let textoEncriptado = texto.replace(/enter/mg, "e");
    textoEncriptado = textoEncriptado.replace(/imes/mg, "i");
    textoEncriptado = textoEncriptado.replace(/ai/mg, "a");
    textoEncriptado = textoEncriptado.replace(/ober/mg, "o");
    textoEncriptado = textoEncriptado.replace(/ufat/mg, "u");

    document.getElementById("contenedor-subtitulo").style.display = "none";
    document.getElementById("texto-encriptado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
}

function copiar(){
    let texto = document.querySelector("#texto-encriptado");
    texto.select();
    document.execCommand("copy");
}