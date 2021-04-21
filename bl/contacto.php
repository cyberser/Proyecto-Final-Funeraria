<?php 
class C_Contacto{ 

  private $con; // el atributo va a cargar el resultado de la conexión
  private $objcon; //objeto de conexión
  public $resultado;  // el resultado es lo que vamos a compartir
 
 public function __construct()
  {
    //Llamado del objeto Conectar
    $this->objcon = new Conectar();
    $this->con = $this->objcon->conexion();
  }

 //Métodos
  public function contacto($usu, $tel, $men){
	try{
$insertar = $this->con->prepare("INSERT INTO `t_contacto`(`nombre`,`telefono`,`Mensaje`)VALUES('$usu', '$tel', '$men')");

		$resultado = $insertar->execute();
			//Retorna el resultado
			return $resultado; //True or false
	}catch  (PDOException $e) {
 		 echo "Error: ". $e->getMessage();

	}
}
}

?>