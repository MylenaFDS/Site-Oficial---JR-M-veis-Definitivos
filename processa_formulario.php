<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletando os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $mensagem = $_POST['mensagem'];

    // Endereço de e-mail para onde a mensagem será enviada
    $destinatario = "mylenafds@gmail.com"; // Substitua pelo seu endereço de e-mail

    // Construindo o corpo do e-mail
    $assunto = "Nova mensagem de Fale Conosco";
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "Email: $email\n";
    $corpo_email .= "Telefone: $telefone\n\n";
    $corpo_email .= "Mensagem:\n$mensagem\n";

    // Enviando o e-mail
    mail($destinatario, $assunto, $corpo_email);

    // Redirecionando de volta para a página do formulário
    header("Location: index.html"); // Substitua "index.html" pelo nome do seu arquivo HTML de origem
    exit();
}
?>
