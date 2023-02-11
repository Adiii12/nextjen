<?php 

if(isset($_POST['submit'])){
    
    $name = $_POST['w3lName'];
    $email = $_POST['w3lSender'];
    $phone = $_POST['w3lPhone'];
    $msg = $_POST['w3lMessage'];
    
    $content = "Name : ".$name."\nEmail : ".$email."\nPhone : ".$phone."\mMessage : ".$msg;
    
    $mail = mail("marwatadil@yahoo.com",$phone,$content);
    
    if($mail){
        header("Location: index.php?mail=true");
    }
    var_dump($mail);
    
}
?>
