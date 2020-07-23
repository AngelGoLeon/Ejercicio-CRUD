<?php
include 'conexion.php';
error_reporting(0);
header('Content-type: application/json; charset=utf-8');
date_default_timezone_get('America/Mexico_City');

$peticion = file_get_contents("php://input");
$arreglo = json_decode($peticion, true);

if($arreglo["dato"] === 1){

    if($conexion->connect_errno){
        
        $respuesta = ["status"=>2];
    }else{
        $consulta = $conexion->prepare("SELECT * FROM usuarios");
        $consulta->execute();
        $resultado = $consulta->get_result();
        $usuarios = $resultado->fetch_all(MYSQLI_ASSOC);

        $respuesta = $usuarios;
    }

}
echo json_encode($respuesta);
?>