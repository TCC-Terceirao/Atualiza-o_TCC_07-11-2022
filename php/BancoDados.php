<?php
$host="localhost";
$usuario="root";
$senha="";
$bd="bd_tabela";
$conexao=mysqli_connect($host, $usuario, $senha, $bd);
mysqli_set_charset($conexao, 'utf8');
mysqli_select_db($conexao, $bd);
?>