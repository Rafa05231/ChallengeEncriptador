function encriptar(){
    let texto = document.getElementById("textoCifrar").value.toLowerCase();


    let textoEncriptado = texto.replace(/e/img, "enter");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoEncriptado").innerHTML = textoEncriptado;
}