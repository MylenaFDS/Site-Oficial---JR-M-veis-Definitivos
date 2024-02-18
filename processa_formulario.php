<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-PHPMailer-2128d99/src/Exception.php';
require 'PHPMailer-PHPMailer-2128d99/src/PHPMailer.php';
require 'PHPMailer-PHPMailer-2128d99/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletando os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $mensagem = $_POST['mensagem'];

    // Configuração do PHPMailer
    $mail = new PHPMailer(true);

    // Configurações do servidor SMTP do Gmail
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'mylenafds@gmail.com'; // Substitua pelo seu endereço de e-mail
    $mail->Password = 'FofuxaHta97'; // Substitua pela sua senha ou pela senha do aplicativo
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Remetente e destinatário
    $mail->setFrom($email, $nome);
    $mail->addAddress('mylenafds@gmail.com'); // Substitua pelo seu endereço de e-mail

    // Conteúdo do e-mail
    $mail->isHTML(true);
    $mail->Subject = 'Nova mensagem de Fale Conosco';
    $mail->Body = "Nome: $nome<br>Email: $email<br>Telefone: $telefone<br><br>Mensagem:<br>$mensagem";

    // Tenta enviar o e-mail
    try {
        $mail->send();
        echo 'E-mail enviado com sucesso';
    } catch (Exception $e) {
        echo 'Erro ao enviar o e-mail: ' . $mail->ErrorInfo;
    }

    // Redireciona de volta para a página do formulário
    header("Location: index.html"); // Substitua "index.html" pelo nome do seu arquivo HTML de origem
    exit();
}
?>
