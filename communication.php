<?php

$recepient = "akhmet.novruzov2013@gmail.com";
$sitename = "miniatura.pro";

$message = trim($_POST["message"]);
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$letter = "Описание: $message \nИмя: $name \nТелефон: $phone \nEmail: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $letter, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");