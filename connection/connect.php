<?php
$host = "localhost";
$dbname = "advergame";
$username = "root";
$userpwd = "";

try{
    $db = new PDO("mysql:host=" .$host . ";dbname=" . $dbname . ";charset=utf8", $username, $userpwd);
    $db->exec('SET NAMES UTF8');
} catch( Exception $e){
    die($e->getMessage());
}