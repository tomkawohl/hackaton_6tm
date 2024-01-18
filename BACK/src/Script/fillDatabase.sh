#!/bin/bash

echo "Script: fill Database."

ls -a

# The path is .env because is runned from root from Docker
# To run it manually : it's ../../env

if [ -f .env ]; then
    source .env
else
    echo "Error: .env file not found."
    exit 1
fi

echo "DB_HOST: $DB_HOST"
echo "DB_USER: $DB_USER"
echo "DB_PASSWORD: $DB_PASSWORD"
echo "DB_NAME: $DB_NAME"

if [ "$(mysql -h $DB_HOST -u $DB_USER -p$DB_PASSWORD -D $DB_NAME -e 'SHOW TABLES LIKE "person";' | wc -l)" -gt 0 ]; then
    echo "Database is already filled. Skipping the filling script."
    exit 1
fi

mysql_command="mysql -h $DB_HOST -u $DB_USER -p$DB_PASSWORD -D $DB_NAME"

json_url="https://trombi.6tmphp.fr/data.json"
json_data=$(curl -s "$json_url")

if [ -z "$json_data" ]; then
    echo "Error: Unable to fetch JSON data."
    exit 1
fi

for person in $(echo "$json_data" | jq -c '.[]'); do
    nom=$(echo "$person" | jq -r '.nom')
    prenom=$(echo "$person" | jq -r '.prenom')
    poste=$(echo "$person" | jq -r '.poste')
    equipe=$(echo "$person" | jq -r '.equipe')
    agence=$(echo "$person" | jq -r '.agence')
    photo_pro=$(echo "$person" | jq -r '.photo_pro')
    photo_fun=$(echo "$person" | jq -r '.photo_fun')

    $mysql_command <<EOF
    INSERT INTO person (nom, prenom, poste, equipe, agence, photo_pro, photo_fun)
    VALUES ('$nom', '$prenom', '$poste', '$equipe', '$agence', '$photo_pro', '$photo_fun');
EOF

    if [ $? -ne 0 ]; then
        echo "Error inserting person into the database."
        exit 1
    fi
done

echo "Data inserted successfully."

$mysql_command -e "quit"

echo "Script: Database filled."

