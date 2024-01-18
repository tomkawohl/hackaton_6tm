##
## EPITECH PROJECT, 2024
## MAKEFILE
## File description:
## Makefile HACKATHON
##

all:
	docker-compose up

build:
	docker-compose build
	docker-compose up -d
	docker-compose down
	docker-compose up -d
	docker-compose exec symfony php bin/console make:migration
	docker-compose exec symfony php bin/console doctrine:migrations:migrate
	cd INIT_DB && pip3 install mysql-connector-python && python3 init_db.py
	docker-compose down
	docker-compose up

down:
	docker-compose down