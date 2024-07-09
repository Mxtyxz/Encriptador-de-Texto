const textoAcopiar = document.getElementById('texto-a-copiar');

function copiarTexto() {
    let texto = textoAcopiar.innerText;
    navigator.clipboard.writeText(texto)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => console.error('Error al copiar el texto: ', err));
}

function textoValido(texto) {
    return /^[a-z\s]+$/.test(texto);
}

function encriptarTexto() {
    const textareaInput = document.getElementById('textarea-input');
    const texto = textareaInput.value;
    if (!textoValido(texto)) {
        alert('El texto contiene caracteres inválidos. Solo letras minúsculas y sin acentos.');
        return;
    }
    const textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    textoAcopiar.innerText = textoEncriptado; 
    document.getElementById("sinTexto").style.display = "none"; 
    document.getElementById("conTexto").style.display = "flex"; 
}

function desencriptarTexto() {
    const textareaInput = document.getElementById('textarea-input');
    const texto = textareaInput.value;
    if (!textoValido(texto.replace(/enter|imes|ai|ober|ufat/g, ''))) {
        alert('El texto contiene caracteres inválidos. Solo letras minúsculas y sin acentos.');
        return;
    }
    const textoDesencriptado = texto
    .replace(/ufat/g, 'u')
    .replace(/ober/g, 'o')
    .replace(/ai/g, 'a')
    .replace(/imes/g, 'i')
    .replace(/enter/g, 'e');
    
    textoAcopiar.innerText = textoDesencriptado;
    document.getElementById("sinTexto").style.display = "none"; 
    document.getElementById("conTexto").style.display = "flex";  
}
