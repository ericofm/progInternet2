<?php

$nome = $_GET['txtNome'];
$email = $_GET['txtEmail'];

$conteudo = "<table border='1'> 
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                </tr>";

// for( $i = $numero + 1 ; $i <= $numero + 5000; $i++){
    $conteudo = $conteudo . "<tr>
                                <td>".$nome."</td>
                                <td>".$email."</td>
                            </tr>";
//}

$conteudo = $conteudo . "</table>";

echo $conteudo;