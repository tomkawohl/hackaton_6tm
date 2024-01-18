<?php

namespace App\Entity;

use App\Repository\CardRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CardRepository::class)]
class Card
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $surname = null;

    #[ORM\Column(length: 255)]
    private ?string $poste = null;

    #[ORM\Column(length: 255)]
    private ?string $equipe = null;

    #[ORM\Column(length: 255)]
    private ?string $agence = null;

    #[ORM\Column(length: 255)]
    private ?string $photo_pro = null;

    #[ORM\Column(length: 255)]
    private ?string $photo_fun = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getSurname(): ?string
    {
        return $this->surname;
    }

    public function setSurname(string $surname): static
    {
        $this->surname = $surname;

        return $this;
    }

    public function getPoste(): ?string
    {
        return $this->poste;
    }

    public function setPoste(string $poste): static
    {
        $this->poste = $poste;

        return $this;
    }

    public function getEquipe(): ?string
    {
        return $this->equipe;
    }

    public function setEquipe(string $equipe): static
    {
        $this->equipe = $equipe;

        return $this;
    }

    public function getAgence(): ?string
    {
        return $this->agence;
    }

    public function setAgence(string $agence): static
    {
        $this->agence = $agence;

        return $this;
    }

    public function getPhotoPro(): ?string
    {
        return $this->photo_pro;
    }

    public function setPhotoPro(string $photo_pro): static
    {
        $this->photo_pro = $photo_pro;

        return $this;
    }

    public function getPhotoFun(): ?string
    {
        return $this->photo_fun;
    }

    public function setPhotoFun(string $photo_fun): static
    {
        $this->photo_fun = $photo_fun;

        return $this;
    }
}
