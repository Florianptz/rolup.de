<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = strip_tags(trim($_POST["firstname"]));
    $lastName = strip_tags(trim($_POST["lastname"]));
    $email = filter_var(trim($_POST["emailinput"]), FILTER_SANITIZE_EMAIL);
    $phone = trim($_POST["phonenumber"]);
    $message = trim($_POST["message"]);

    if (!empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL) && (empty($phone) || preg_match('/^\+?(\d.*){10,}$/', $phone))) {
        $recipient = "kontakt@rolup.de";
        $subject = "Neue Nachricht von $firstName $lastName";
        $email_content = "Vorname: $firstName\n";
        $email_content .= "Nachname: $lastName\n";
        $email_content .= "Email: $email\n";
        if (!empty($phone)) {
            $email_content .= "Handynummer: $phone\n";
        }
        $email_content .= "\nNachricht:\n$message\n";

        $email_headers = "From: $firstName $lastName <$email>";

        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Danke! Ihre Nachricht wurde gesendet.";
        } else {
            http_response_code(500);
            echo "Hoppla! Etwas ist schief gelaufen und Ihre Nachricht konnte nicht gesendet werden.";
        }
    } else {
        http_response_code(400);
        echo "Bitte füllen Sie das Formular vollständig aus und versuchen Sie es erneut.";
    }
} else {
    http_response_code(403);
    echo "Es gibt ein Problem mit Ihrer Einreichung, bitte versuchen Sie es erneut.";
}
?>
