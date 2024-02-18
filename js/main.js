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

    // Adicionar scripts do EmailJS
    (function(){
        emailjs.init({
            // user_id: 'user_YOUR_USER_ID', // Não precisa disso com o EmailJS Connect
            service_id: 'service_0mk1eo6', // ID do seu serviço de EmailJS
        });
    })();

    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Pegar os valores do formulário
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var telefone = document.getElementById('telefone').value;
        var mensagem = document.getElementById('mensagem').value;

        // Enviar os valores do formulário para o EmailJS
        emailjs.send('service_0mk1eo6', 'template_1ymg5od', {
            "from_name": nome,
            "from_email": email,
            "telefone": telefone,
            "mensagem_html": mensagem
        })
        .then(function(response) {
            console.log('Sucesso!', response.status, response.text);
            document.getElementById('mensagemSucesso').innerHTML = "Mensagem enviada com sucesso!";
        }, function(error) {
            console.log('Erro :(', error);
            document.getElementById('mensagemErro').innerHTML = "Ocorreu um erro ao enviar a mensagem.";
        });
    });
});


