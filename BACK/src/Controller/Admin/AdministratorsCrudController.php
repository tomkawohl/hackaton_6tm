<?php

namespace App\Controller\Admin;

use App\Entity\Administrators;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class AdministratorsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Administrators::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            //IdField::new('id'), <- AUTOINCREMENT
            TextField::new('mail'),
            TextField::new('password'),
        ];
    }
}
