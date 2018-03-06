
<?php
if(isset($_POST['email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
    $email_to = "info@qubitmarketing.com";
    $email_subject = "Contacto desde el sitio web";

// Aquí se deberían validar los datos ingresados por el usuario
    if(!isset($_POST['first_name']) ||
        !isset($_POST['last_name']) ||
        !isset($_POST['phone']) ||
        !isset($_POST['email']) ||
        !isset($_POST['dr_name']) ||
        !isset($_POST['dr_phone']) ||
        !isset($_POST['medication']) ||
        !isset($_POST['message'])) {

        echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
        echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
        die();
    }

    $email_message = "Detalles del formulario de contacto:\n\n";
    $email_message .= "First: " . $_POST['first_name'] . "\n";
    $email_message .= "Last: " . $_POST['last_name'] . "\n";
    $email_message .= "Phone: " . $_POST['phone'] . "\n";
    $email_message .= "E-mail: " . $_POST['email'] . "\n";
    $email_message .= "Dr Name: " . $_POST['dr_name'] . "\n";
    $email_message .= "Dr Phone: " . $_POST['dr_phone'] . "\n";
    $email_message .= "Medication: " . $_POST['medication'] . "\n";
    $email_message .= "Menssage: " . $_POST['Menssage'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
    $headers = 'From: '.$email_from."\r\n".
        'Reply-To: '.$email_from."\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);

    echo "¡El formulario se ha enviado con éxito!";
}
?>