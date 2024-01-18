<?php

namespace App\Controller\Admin;

use App\Entity\Person;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;


use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use Vich\UploaderBundle\Form\Type\VichImageType;

class PersonCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Person::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            #IdField::new('id'), <- AUTOINCREMENT
            TextField::new('nom'),
            TextField::new('prenom'),
            TextField::new('poste'),
            TextField::new('equipe'),
            TextField::new('agence'),
            TextField::new('description'),
            IntegerField::new('note'),
            ImageField::new('photo_pro')
                ->setBasePath('/upload/persons_photos')
                ->setUploadDir('public/upload/persons_photos')
                ->setLabel('Photo'),
            ImageField::new('photo_fun')
                ->setBasePath('/upload/persons_photos')
                ->setUploadDir('public/upload/persons_photos')
                ->setLabel('Photo'),
            #TextEditorField::new('description'),
        ];
    }
}
