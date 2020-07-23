<?php
$servidor = 'localhost';
$usuario = 'root';
$contraseña = '';
$baseDatos = 'ejemplo';
$conexion = new mysqli($servidor, $usuario, $contraseña, $baseDatos);
$conexion->set_charset("utf8");
?>