<?php

header('Content-type: application/json');

$errors = '';

if(empty($errors))
{

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $from_first = $request->first;
    $from_last = $request->last;
    $from_email = $request->email;
    $from_phone = $request->phone;
    $from_pharmacyName = $request->pharmacyName;
    $from_pharmacyPhone = $request->pharmacyPhone;
    $from_rx = $request->rx;
    $from_drName = $request->drName;
    $from_drPhone = $request->drPhone;
    $message = $request->message;


    $to_email = "info@qubitmarketing.com";

    $contact = "<p><strong>Email:</strong> $from_email</p>";

    $content = "<p><strong>First:</strong> $from_first</p>
                <p><strong>Last:</strong> $from_last</p>
                <p><strong>Phone:</strong> $from_phone</p>
                <p><strong>Pharmacy Name:</strong> $from_pharmacyName</p>
                <p><strong>Pharmacy Phone:</strong> $from_pharmacyPhone</p>
                <p><strong>RX:</strong> $from_rx</p>
                <p><strong>Dr Name:</strong> $from_drName</p>
                <p><strong>Dr Phone:</strong> $from_drPhone</p>
                <p>$message</p>";

    $website = 'Premier Pharmacy ';
    $email_subject = "$website: Contact Transfer Prescription $from_first ";

    $email_body = '<html><body>';
    $email_body .= "$contact $content";
    $email_body .= '</body></html>';

    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $headers .= "From: $from_email\n";
    $headers .= "Reply-To: $from_email";

    mail($to_email,$email_subject,$email_body,$headers);

    $response_array['status'] = 'success';
    $response_array['from'] = $from_email;
    echo json_encode($response_array);
    echo json_encode($from_email);
    header($response_array);
    return $from_email;
} else {
    $response_array['status'] = 'error';
    echo json_encode($response_array);
    header('Location: /error.html');
}
?>