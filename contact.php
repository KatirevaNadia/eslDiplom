<?php
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$post = (!empty($_POST)) ? true : false;

if($post)
{
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$error = '';

if(!$name )
{
$error .= 'Пожалуйста введите ваше имя<br />';
}
if($phone == "")
{   
$error .= "Пожалуйста введите ваш номер телефона<br />";
}
if($email == "")
{   
$error .= "Пожалуйста введите email<br />";
}
// Проверка телефона
$pattern = "/^\+380\d{3}\d{2}\d{2}\d{2}$/";
  if($phone!="" && !preg_match($pattern, $phone)) $error .= "Введите корректный номер телеофна<br />"; 

// Проверка почты
if ($email !="" && !preg_match("/^(?:[a-z0-9]+(?:[-_.]?[a-z0-9]+)?@[a-z0-9_.-]+(?:\.?[a-z0-9]+)?\.[a-z]{2,5})$/i", $email)) {
    $error .= "Введите корректный email<br />";
}
//если данные введены корректно
if(!$error)
{

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'notbutim@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '0968207412'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('notbutim@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('diplomaesl@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка сайта ESL ' .date("F j, Y, g:i a");
$mail->Body    = '' .$name . ' оставил(а) заявку "Свяжитесь со мной".<br>Телефон: ' .$phone. '<br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if($mail->send()) {
    echo 'Ok';

} 
}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}

}
?>