import requests
import mysql.connector

# Fonction pour récupérer les données depuis l'URL JSON
def get_json_data(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Erreur lors de la récupération des données. Code d'erreur : {response.status_code}")
        return None

# Fonction pour insérer les données dans la base de données MySQL
def insert_data_into_database(data):
    connection = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="root_password",
        database="your_database_name"
    )
    cursor = connection.cursor()

    notes = [3, 4, 5]
    commentary = ["cela est un commentaire", "ceci est un commentaire", "le super commentaire"]
    visited = [7, 9, 17]
    i = 0
    # Insertion des données dans la table
    for personne in data:
        i += 1
        if i == 3:
            i = 0
        cursor.execute('''
            INSERT INTO person (nom, prenom, poste, equipe, agence, photo_pro, photo_fun, description, note, visited)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        ''', (
            personne['nom'],
            personne['prenom'],
            personne['poste'],
            personne['equipe'],
            personne['agence'],
            personne.get('photo_pro', ''),
            personne.get('photo_fun', ''),
            commentary[i],
            notes[i],
            visited[i],
        ))

    # Commit et fermeture de la connexion
    connection.commit()
    connection.close()

if __name__ == "__main__":
    json_url = "https://trombi.6tmphp.fr/data.json"
    data = get_json_data(json_url)

    if data:
        insert_data_into_database(data)
        print("Les données ont été insérées dans la base de données MySQL avec succès.")
