<?php

namespace App\Controller\Admin;


use App\Entity\Person;
use App\Entity\Administrators;

use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\Security\Http\Attribute\IsGranted;


class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        $personRouteBuilder = $this->container->get(AdminUrlGenerator::class);
        $personUrl = $personRouteBuilder->setController(PersonCrudController::class)->generateUrl();
    
        $adminRouteBuilder = $this->container->get(AdminUrlGenerator::class);
        $adminUrl = $adminRouteBuilder->setController(AdministratorsCrudController::class)->generateUrl();
    
        return $this->render('admin/dashboard.html.twig', [
            'person_url' => $personUrl,
            'admin_url' => $adminUrl,
        ]);
        // return $this->render('some/path/my-dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('<img src="/imgs/logo.svg">');
            //->disableLightMode();
            
    }

    public function configureMenuItems(): iterable
    {

        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');

        yield MenuItem::section('Membres');
        yield MenuItem::linkToCrud('Membres', 'fas fa-list', Person::class);
        yield MenuItem::section('Administrateurs');
        yield MenuItem::linkToCrud('Administrateurs', 'fas fa-users', Administrators::class);

    }
}
