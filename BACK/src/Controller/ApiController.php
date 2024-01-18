<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Person;

use Symfony\Component\HttpFoundation\JsonResponse;

class ApiController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route("/api/employees", name: 'app_api')]
    public function fetchData(): JsonResponse
    {
        $personRepository = $this->entityManager->getRepository(Person::class);
        $employees = $personRepository->findAll();

        $employeeData = [];
        foreach ($employees as $employee) {
            $employeeData[] = [
                'id' => $employee->getId(),
                'nom' => $employee->getNom(),
                'prenom' => $employee->getPrenom(),
                'poste' => $employee->getPoste(),
                'equipe' => $employee->getEquipe(),
                'agence' => $employee->getAgence(),
                'photo_pro' => $employee->getPhotoPro(),
                'photo_fun' => $employee->getPhotoFun(),
            ];
        }
        return $this->json($employeeData);
    }
}
