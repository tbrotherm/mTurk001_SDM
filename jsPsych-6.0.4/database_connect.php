<?php

function db_connection() {
    //user name
    $db_user = "sddbMzg1NTUx";
    //password
    $db_password = "ef0ChZE6pVxwqkKI";
    //host
    $db_host = "sddb0040172708.cgidb";
    //db name
    $db_name = "sddb0040172708";
    //port #
    $db_port = "3306";
    //db type
    $db_type = "mysql";
    //set $dsn
    $dsn = "$db_type:host=$db_host;dbname=$db_name;port=$db_port;charset=utf8";

try {
    //connect to db by PDO
    $dbh = new PDO($dsn, $db_user, $db_password);
    //set attribute (throw exception if error raised)
    $dbh -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //set attribute (use prepared statement)
    $dbh -> setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    print "Connection succeed!";
} catch (PDOException $e) {
    ////when throwing an exception, show error code
    die("Connection failed: ".$e -> getMessage());
}
return $dbh;
}

?>