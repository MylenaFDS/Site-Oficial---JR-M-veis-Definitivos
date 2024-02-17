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

$(document).ready(function(){
    // Aplicar máscaras aos campos
    $('#telefone').mask('+00 (00) 0 0000-0000');
    
    // Adicionar ação ao formulário
    $('#messageForm').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira um e-mail válido',
            mensagem: 'Por favor, insira a sua mensagem'
        },
        submitHandler: function(form) {
            // Lógica para enviar os dados do formulário para o servidor
            // Aqui você pode fazer uma requisição AJAX para enviar os dados do formulário
        
            // Exibir mensagem de sucesso na página
            $('#mensagemSucesso').html('Mensagem enviada com sucesso!');
            setTimeout(function() {
                $('#mensagemSucesso').html('');
            }, 2000);
            // Limpar os campos do formulário
            form.reset();
        },
        
        invalidHandler: function(event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                $('#mensagem-erro').html(`Existem ${camposIncorretos} campos incorretos`);
                
                // Adicionar um atraso de 2 segundos antes de limpar a mensagem
                setTimeout(function() {
                    $('#mensagem-erro').html('');
                }, 2000);
            }
        }
    });
});


