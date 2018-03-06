<?php
 
header('Content-type: application/json');
 
$errors = '';
 
if(empty($errors))
{
 
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
 
	$from_email = $request->email;
	$message = $request->message;
    $from_first = $request->first;
    $from_last = $request->last;
    $from_phone = $request->phone;
    $from_drname = $request->dr_name;
    $from_drphone = $request->dr_phone;
    $from_medication = $request->medication;


 
	$to_email = $from_email;
 
	$contact = "<p><strong>Name:</strong> $from_first</p>
                            <p><strong>Last:</strong> $from_last</p> <p><strong>Phone:</strong> $from_phone</p><p><strong>Dr_Name:</strong> $from_dr_name</p>
                            <p><strong>Dr_Phone:</strong> $from_dr_phone</p> <p><strong>Medication:</strong> $from_medication</p>";
	$content = "<p>$message</p>";
 
	$website = 'New Prescription';
	$email_subject = "$website: Neue Nachricht von $from_first erhalten";
 
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