// Função para detectar o sistema operacional
function detectarSistemaOperacional() {
    var platform = navigator.platform;
    if (platform.match(/Win/i)) {
        return "Windows";
    } else if (platform.match(/Mac/i)) {
        return "MacOS";
    } else if (platform.match(/Android/i)) {
        return "Android";
    } else if (platform.match(/iPhone|iPad|iPod/i)) {
        return "iOS";
    } else {
        return "Outro";
    }
}

// Usar a função para obter o sistema operacional
var sistemaOperacional = detectarSistemaOperacional();
console.log("Sistema Operacional: " + sistemaOperacional);

