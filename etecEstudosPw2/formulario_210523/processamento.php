<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Processamento PHP</title>
</head>

<body>
    <?php
    if (filter_input(INPUT_SERVER, 'REQUEST_METHOD') == 'POST') 
    {
        $nome = filter_input(INPUT_POST, 'nome1');
        $sobrenome = filter_input(INPUT_POST, 'sobrenome1');
        $idade = filter_input(INPUT_POST, 'idade1');
        $email = filter_input(INPUT_POST, 'email1');
        $telefone = filter_input(INPUT_POST, 'telefone1');
        $rua = filter_input(INPUT_POST, 'rua1');
        $numero = filter_input(INPUT_POST, 'numero1');
        $bairro = filter_input(INPUT_POST, 'bairro1');
        $cidade = filter_input(INPUT_POST, 'cidade1');
        echo $nome . '<br>' . $sobrenome .'<br>'.$idade.'<br>'.$email.'<br>'.$telefone.'<br>'.$rua.'<br>'.$numero.'<br>'.$bairro.'<br>'.$cidade;
        # code...
    }
    ?>
</body>

</html>