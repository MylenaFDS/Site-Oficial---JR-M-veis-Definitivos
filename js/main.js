$(document).ready(function(){
    // Função para detectar o sistema operacional
    function detectarSistemaOperacional() {
        var platform = navigator.platform;
        console.log("Plataforma do navegador:", platform); // Adiciona esta linha para depurar
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

    // Aplicar máscaras aos campos
    $('#telefone').mask('+55 (00) 0 0000-0000');
    
    emailjs.init('ksXbBXjp0VhIH57I4');
    
    // Adicionar ação ao formulário
    $('#messageForm').validate({
        rules: {
            nome: { required: true },
            email: { required: true, email: true },
            mensagem: { required: true }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira um e-mail válido',
            mensagem: 'Por favor, insira a sua mensagem'
        },
        submitHandler: function(form) {
            $('#mensagemSucesso').html('Enviando mensagem...');
            
            // Pegar os valores do formulário
            var nome = $('#nome').val();
            var email = $('#email').val();
            var telefone = $('#telefone').val();
            var mensagem = $('#mensagem').val();
        
            // Enviar os valores do formulário para o EmailJS
            emailjs.send('service_0mk1eo6', 'template_1ymg5od', {
                "nome": nome,
                "email": email,
                "telefone": telefone,
                "mensagem": mensagem
            })
            .then(function(response) {
                console.log('Sucesso!', response.status, response.text);
                $('#mensagemSucesso').html("Mensagem enviada com sucesso!");
                form.reset();
            }, function(error) {
                console.log('Erro :(', error);
                $('#mensagemErro').html("Ocorreu um erro ao enviar a mensagem.");
            });
        },
        
        invalidHandler: function(event, validator) {
            var camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                $('#mensagemErro').html(`Existem ${camposIncorretos} campos incorretos`);
                setTimeout(function() {
                    $('#mensagemErro').html('');
                }, 2000);
            }
        }
    });
});

