<?php
include 'conexion.php';
error_reporting(0);
header('Content-type: application/json; charset=utf-8');
date_default_timezone_get('America/Mexico_City');

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];

if($conexion->connect_errno){
        
    $respuesta = ['errorConexion' => true];
}else{

    $registrar = $conexion->prepare("INSERT INTO usuarios (NOMBRE, CORREO, TELEFONO) VALUES (?,?,?)");
    $registrar->bind_param("sss", $nombre, $correo, $telefono);
    $registrar->execute();

    if($conexion->affected_rows <= 0){
        
        $respuesta = ['errorConsulta' => true];
    }else{
        $respuesta = ['errorConsulta' => false];
    }
}

echo json_encode($respuesta);
?>