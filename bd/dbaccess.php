<?php 
class Conectar
{
    private $server = "localhost";
    private $user = "root"; 
    private $pass = ""; 
    private $dbname = "el_reencuentro";

    public function conexion(){
        try{
          $conn = new PDO("mysql:host=$this->server;dbname=$this->dbname",$this->user,$this->pass);
          $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          return $conn;
        }catch(PDOException $e){
          echo "Conexión falló: ".$e->getMessage();
        }

    }   
}
?>





