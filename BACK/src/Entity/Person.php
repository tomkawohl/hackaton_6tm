<?php

namespace App\Entity;

use App\Repository\PersonRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PersonRepository::class)]
class Person
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    private ?string $prenom = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $poste = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $equipe = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $agence = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $photo_pro = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $photo_fun = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): static
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getPoste(): ?string
    {
        return $this->poste;
    }

    public function setPoste(?string $poste): static
    {
        $this->poste = $poste;

        return $this;
    }

    public function getEquipe(): ?string
    {
        return $this->equipe;
    }

    public function setEquipe(?string $equipe): static
    {
        $this->equipe = $equipe;

        return $this;
    }

    public function getAgence(): ?string
    {
        return $this->agence;
    }

    public function setAgence(?string $agence): static
    {
        $this->agence = $agence;

        return $this;
    }

    public function getPhotoPro(): ?string
    {
        return $this->photo_pro;
    }

    public function setPhotoPro(?string $photo_pro): static
    {
        $this->photo_pro = $photo_pro;

        return $this;
    }

    public function getPhotoFun(): ?string
    {
        return $this->photo_fun;
    }

    public function setPhotoFun(?string $photo_fun): static
    {
        $this->photo_fun = $photo_fun;

        return $this;
    }
}
