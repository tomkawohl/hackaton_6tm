##
## EPITECH PROJECT, 2024
## MAKEFILE
## File description:
## Makefile
##

all:
	docker-compose up
	docker-compose exec symfony php bin/console make:migration
	docker-compose exec symfony php bin/console doctrine:migrations:migrate


down:
	docker-compose down

re: down all