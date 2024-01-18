<?php
/*
require_once __DIR__ . '/../../vendor/autoload.php';
use Dotenv\Dotenv;

$dotenvPath = realpath(__DIR__ . '/../../');
$dotenv = Dotenv::createImmutable($dotenvPath);
$dotenv->load();
*/

class Database
{
    private static $instance = null;
    private $pdo;
    private function __construct()
    {
        /*
        $dbname = $_ENV['DB_NAME'];
        $user = $_ENV['DB_USER'];
        $password = $_ENV['DB_PASSWORD'];
        $host = $_ENV['DB_HOST'];
        */
        $dbname = "your_database_name";
        $host = "db";
        $user = "root";
        $password = "root_password";

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