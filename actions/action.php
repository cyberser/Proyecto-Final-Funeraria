<?php 

require("../include.php");
//libreria para el envio de correo
require("../PHPMailer/src/PHPMailer.php");
//libreria para la activacion del protocolo de salida SMTP
require("../PHPMailer/src/SMTP.php");



if(!empty($_POST["usu"])  && !empty($_POST["tel"]) && !empty($_POST["men"])){  //ajax
    //HAY DATOS
 
    $usu = $_POST["usu"];
    $tel = $_POST["tel"];
    $men = $_POST["men"];
   
   


    //echo $correo;

$usuarios= new C_Contacto();
$result=$usuarios->contacto($usu, $tel, $men);
   if ($result) {
      //ÉXITO
  

//aqui va la funcion de correo
$mail=new PHPMailer();
try {
  //activando una compilacion detallada del envio de la información al servidor
 
 //nos da la info de la ruta
 // $mail->SMTPDebug= SMTP::DEBUG_SERVER;

  //el envío de la informacion sera por protocolo 
  $mail->isSMTP();
  //establece el servidor SMTP de envio
  $mail->Host="smtp.gmail.com";


  ///activar la autenticacion smtp
  $mail->SMTPAuth=true;
//datos de autenticación
  $mail->Username="sergioma7623@gmail.com";
  $mail->Password="espectro3455947";

  //habilitar encriptación TLS 
  $mail->SMTPSecure=PHPMailer::ENCRYPTION_STARTTLS;

  //EL PUERTO DE SALIDA DE LA INFORMACIÓN
  $mail->Port=587;

  //establecer remitente y el destinatario
  $mail->setFrom("sergioma7623@gmail.com", "sergio");
//correo del destino
  $mail->addAddress("sergioma7623@gmail.com", "sergio");

  //contenido
  $mail->CharSet="UTF-8";
  $mail->isHTML(true);
  //$mail->Subject= "Correo enviado de forma local";
   $mail->Subject=$usu ;
  //cuerpo del msj
  //$mail->Body="<b>Este mensaje lo he enviado atravez de<span style='color:#f18e0f;'> XAMPP</span></b>";
   $mail->Body="$usu <br> Su mensaje fue recibido, pronto estaremos en contacto" ;
  //ejecuta el envio
  $mail->send();
  //echo "mensaje enviado exitósamente";



  //enviar la informacion
} catch (Exception $e) {
  echo "el mensajen no se pudo enviar. Error: $mail->ErrorInfo";
}



    }else{
       
    } 
 echo ' <div class="alert alert-success" role="alert" style="
background-color:green;
margin-top:50px;

 ">
               El mensaje ha sido enviado correctamente.
              </div>';
}else{
  echo '<div class="alert alert-danger" role="alert">
                Error al Insertar Datos
              </div>';
}


//PDO PARA VARIOS MOTORES BASES DE DATOS
//MYSQL
?>