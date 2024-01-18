<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Person;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
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
                'description' => $employee->getDescription(),
                'otherDescription' => $employee->getOtherDescription(),
                'note' => $employee->getNote(),
                'visited' => $employee->getVisited(),
                'photo_pro' => $employee->getPhotoPro(),
                'photo_fun' => $employee->getPhotoFun(),
            ];
        }
        return $this->json($employeeData);
    }

    #[Route("/api/employees/agency", name: 'app_api/agency')]
    public function getByAgency(): JsonResponse
    {
        $personRepository = $this->entityManager->getRepository(Person::class);
        $employees = $personRepository->findAll();

        $cityStatistics = [];

        foreach ($employees as $employee) {
            $city = $employee->getAgence();

            if (!isset($cityStatistics[$city])) {
                $cityStatistics[$city] = 1;
            } else {
                $cityStatistics[$city]++;
            }
        }

        $totalEmployees = count($employees);

        $proportionStatistics = [];

        foreach ($cityStatistics as $city => $count) {
            $proportion = ($count / $totalEmployees) * 100;
            $proportionStatistics[] = [
                'city' => $city,
                'proportion' => $proportion,
            ];
        }

        usort($proportionStatistics, function($a, $b) {
            return $b['proportion'] <=> $a['proportion'];
        });
        return $this->json($proportionStatistics);
    }

    #[Route("/api/employees/team", name: 'app_api/team')]
    public function getByTeam(): JsonResponse
    {
        $personRepository = $this->entityManager->getRepository(Person::class);
        $employees = $personRepository->findAll();

        $teamStatistics = [];

        foreach ($employees as $employee) {
            $team = $employee->getEquipe();

            if (!isset($teamStatistics[$team])) {
                $teamStatistics[$team] = 1;
            } else {
                $teamStatistics[$team]++;
            }
        }

        $totalEmployees = count($employees);

        $proportionStatistics = [];

        foreach ($teamStatistics as $team => $count) {
            $proportion = ($count / $totalEmployees) * 100;
            $proportionStatistics[] = [
                'team' => $team,
                'proportion' => $proportion,
            ];
        }

        usort($proportionStatistics, function($a, $b) {
            return $b['proportion'] <=> $a['proportion'];
        });
        return $this->json($proportionStatistics);
    }

    #[Route("/api/employees/job", name: 'app_api/job')]
    public function getByJob(): JsonResponse
    {
        $personRepository = $this->entityManager->getRepository(Person::class);
        $employees = $personRepository->findAll();

        $jobStatistics = [];

        foreach ($employees as $employee) {
            $job = $employee->getPoste();

            if (!isset($jobStatistics[$job])) {
                $jobStatistics[$job] = 1;
            } else {
                $jobStatistics[$job]++;
            }
        }

        $totalEmployees = count($employees);

        $proportionStatistics = [];

        foreach ($jobStatistics as $job => $count) {
            $proportion = ($count / $totalEmployees) * 100;
            $proportionStatistics[] = [
                'job' => $job,
                'proportion' => $proportion,
            ];
        }

        usort($proportionStatistics, function($a, $b) {
            return $b['proportion'] <=> $a['proportion'];
        });
        return $this->json($proportionStatistics);
    }

    #[Route("/api/employees/firstName", name: 'app_api/firstName')]
    public function getByFirstName(): JsonResponse
    {
        $personRepository = $this->entityManager->getRepository(Person::class);
        $employees = $personRepository->findAll();

        $firstNameStatistics = [];

        foreach ($employees as $employee) {
            $firstName = $employee->getPrenom();

            if (!isset($firstNameStatistics[$firstName])) {
                $firstNameStatistics[$firstName] = 1;
            } else {
                $firstNameStatistics[$firstName]++;
            }
        }

        $totalEmployees = count($employees);

        $proportionStatistics = [];

        foreach ($firstNameStatistics as $firstName => $count) {
            $proportion = ($count / $totalEmployees) * 100;
            $proportionStatistics[] = [
                'firstName' => $firstName,
                'proportion' => $proportion,
            ];
        }

        usort($proportionStatistics, function($a, $b) {
            return $b['proportion'] <=> $a['proportion'];
        });
        return $this->json($proportionStatistics);
    }

    #[Route("/api/employees/note", name: 'app_api/note')]
    public function getByNote(): JsonResponse
    {
        $personRepository = $this->entityManager->getRepository(Person::class);
        $employees = $personRepository->findAll();

        $noteStatistics = [];

        foreach ($employees as $employee) {
            $note = $employee->getNote();

            if (!isset($noteStatistics[$note])) {
                $noteStatistics[$note] = 1;
            } else {
                $noteStatistics[$note]++;
            }
        }

        $totalEmployees = count($employees);

        $proportionStatistics = [];

        foreach ($noteStatistics as $note => $count) {
            $proportion = ($count / $totalEmployees) * 100;
            $proportionStatistics[] = [
                'note' => $note,
                'proportion' => $proportion,
            ];
        }

        usort($proportionStatistics, function($a, $b) {
            return $b['proportion'] <=> $a['proportion'];
        });
        return $this->json($proportionStatistics);
    }



    #[Route("/api/post/note", name: 'app_api/post_note')]
    public function postNote(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $id = (int)$data['employeeID'];

        $employeeId = $data['employeeID'];

        $employee = $this->entityManager->getRepository(Person::class)->find($employeeId);

        if (!$employee) {
            return $this->json(['error' => 'Employee not found'], 404);
        }
        //$note = (int)$data['note'];

        $employee->setNote($data['note']);

        $this->entityManager->flush();

        return $this->json(['message' => 'Note updated successfully']);
    }

    #[Route("/api/post/description", name: 'app_api/post_note')]
    public function postDescription(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $employeeId = $data['employeeID'];

        $employee = $this->entityManager->getRepository(Person::class)->find($employeeId);

        if (!$employee) {
            return $this->json(['error' => 'Employee not found'], 404);
        }

        $employee->setDescription($data['description']);

        $this->entityManager->flush();

        return $this->json(['message' => 'Description updated successfully']);
    }

    #[Route("/api/post/visited", name: 'app_api/post_note')]
    public function postVisited(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $employeeId = $data['employeeID'];

        $employee = $this->entityManager->getRepository(Person::class)->find($employeeId);

        if (!$employee) {
            return $this->json(['error' => 'Employee not found'], 404);
        }

        $employee->setVisited($data['visited']);

        $this->entityManager->flush();

        return $this->json(['message' => 'Visited updated successfully']);
    }


}
