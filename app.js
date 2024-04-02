function encriptar(){
    let texto = document.getElementById("textoCifrar").value.toLowerCase();


    let textoEncriptado = texto.replace(/e/img, "enter");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoEncriptado").innerHTML = textoEncriptado;
}

function desencriptar(){
    let texto = document.getElementById("textoCifrar").value.toLowerCase();


    let textoEncriptado = texto.replace(/enter/img, "e");
    textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoEncriptado").innerHTML = textoEncriptado;
}

function copiar(){
    let texto = document.querySelector("#textoEncriptado");
    texto.select();
    document.execCommand("copy");
}