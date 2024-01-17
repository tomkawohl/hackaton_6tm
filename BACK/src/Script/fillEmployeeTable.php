<?php

require_once 'database.php';

$db = Database::getInstance();
$conn = $db->getConnection();


$url = 'https://trombi.6tmphp.fr/data.json';

$jsonData = file_get_contents($url);

$data = json_decode($jsonData, true);

if ($data === null) {
    die("Erreur lors de la conversion JSON.");
}

$sql = "INSERT INTO person (prenom, nom, poste, equipe, agence, photo_pro, photo_fun)
    VALUES(:prenom, :nom, :poste, :equipe, agence, photo_pro, photo_fun)";

$stmt = $conn->prepare($sql);

if ($stmt === false) {
    die("Erreur de préparation de la requête : " . $conn->error);
}

foreach ($data as $person) {
    try {
        $stmt = $conn->prepare("INSERT INTO person (nom, prenom, poste, equipe, agence, photo_pro, photo_fun) VALUES (?, ?, ?, ?, ?, ?, ?)");

        $stmt->bindParam(1, $person['nom']);
        $stmt->bindParam(2, $person['prenom']);
        $stmt->bindParam(3, $person['poste']);
        $stmt->bindParam(4, $person['equipe']);
        $stmt->bindParam(5, $person['agence']);
        $stmt->bindParam(6, $person['photo_pro']);
        $stmt->bindParam(7, $person['photo_fun']);

        $stmt->execute();

  //      echo "Person inserted successfully.\n";
    } catch (PDOException $e) {
        die("Error inserting person: " . $e->getMessage());
    }
}

//echo "Données insérées avec succès.";
$stmt->closeCursor();
$db->breakConnection();

?>
