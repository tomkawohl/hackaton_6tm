<?php

//to verify : use dotenv

class Database
{
    private static $instance = null;
    private $pdo;
    private function __construct()
    {
        $dbname = "your_database_name";
        $user = "root";
        $password = "root_password";
        $host = "db";

        try {

        //$this->conn = new mysqli($host, $user, $password, $dbname);

        $this->pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo "Connected succesfully\n";
        } catch (PDOException $e) {
            die("Connection failed: " . $e->getMessage());
        }
    }

    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function getConnection()
    {
        return $this->pdo;
    }

    public function breakConnection()
    {
        $this->pdo = null;
    }

}
?>