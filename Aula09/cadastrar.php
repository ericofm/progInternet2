<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>

<?php
	function conecta_bd()
	{
	$link=mysqli_connect("localhost","root"," ","api_rest");
	//para tratar caracteres especiais nas operações sobre a base de dados
		mysqli_query($link, "SET NAMES 'utf8'");
		mysqli_query($link, 'SET character_set_connection=utf8');
		mysqli_query($link, 'SET character_set_client=utf8');
		mysqli_query($link, 'SET character_set_results=utf8');
	if ($link)
		return($link);
	return(FALSE);
	}

	$nome=$_POST["txtNome"];
	$mail=$_POST["txtMail"];
	$fone=$_POST["txtFone"];

	if ($nome=="" or $mail=="" or $fone=="")
		print("Faltou preencher algum campo...");
	else
	{
		print("Cadastrando o cliente:<p>");
		$ok = conecta_bd() or die ("Não é possível conectar-se ao servidor.");
		mysqli_query($ok, "insert into tbl_clientes (nome, email, telefone) values ('$nome', '$mail', '$fone')") or die ("Não é possível inserir amigo!");
		print("Cliente cadastrado com sucesso: <b>$nome</b>");
	}
?>
<p><a href="index.html">Concluir e voltar</a>
</body>
</html>