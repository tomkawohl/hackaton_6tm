# Hackathon - 6TM

## About the project

This goal of this hackaton is to do a trombinoscope of a team.
<br>
Here are the goals:
1. Do the website
2. Do a backoffice
3. Optimize code

## Build with
* [![React][React-img]](https://fr.legacy.reactjs.org/)
* [![Php][Php-img]](https://www.php.net/manual/fr/intro-whatis.php)

## Prerequisites
This project is made with Php and React. We run the environment using Docker <br>
All you need is : <br>
* Docker -> https://docs.docker.com/get-docker/

## Installation and usage
* Clone the repository:<br>
`git clone git@github.com:EpitechPromo2027/B-EPI-310-REN-3-1-hackathonweek-martin.bellot.git`
* Run the environment:<br>
`docker-compose up --build`

* When running the environment for the first time, you need to initialize the database by doing: <br>
- [ON OTHER TERMINAL] <br>
- To initialise the structure of database :<br>
* `docker-compose exec symfony php bin/console make:migration`
* `docker-compose exec symfony php bin/console doctrine:migrations:migrate`
- To fill tables of the database : <br>
`docker exec -it back-symfony-1 /bin/bash`
`php src/Script/fillDatabase.php`

* Visit url:<br>
    * localhost:8000/login (back-office)
    * localhost:8000/api/ (api)
    * localhost:5173 (website)
    * localhost:8081 (Data base)

## Authors
- [Martin Bellot](https://github.com/martinbellot)
- [Romain Grandais](https://github.com/romaingrandais)
- [Nathan Coquelin](https://github.com/nathancoquelin)
- [Tom Kawohl](https://github.com/tomkawohl)

[React-img]: https://img.shields.io/badge/react-blue?style=for-the-badge&logo=react&logoColor=white&labelColor=blue
[Php-img]: https://img.shields.io/badge/php-000000?style=for-the-badge&logo=php&logoColor=white