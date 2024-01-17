<?php

namespace App\Controller;

use App\Entity\Person;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
require_once '../Script/database.php';

class PersonController extends AbstractController
{
    private $entityManager;

    // Injecter l'EntityManager dans le constructeur
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/employees', name: 'employees_list', methods: ['GET'])]
    public function getEmployees(): Response
    {
        $db = Database::getInstance();
        $conn = $db->getConnection();

        $sql = "SELECT * FROM person";

        $stmt = $conn->prepare($sql);

        $stmt->execute();

        $employees = $stmt->fetchAll(PDO::FETCH_ASSOC);

        var_dump($sql, $employees);
        return new JsonResponse($employees);
        //new JsonResponse("Salut");
    }
}
