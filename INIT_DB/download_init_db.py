import os
import requests
from PIL import Image
import mysql.connector

# Fonction pour télécharger une image depuis une URL
def download_image(url, save_path):
    response = requests.get(url)
    with open(save_path, 'wb') as file:
        file.write(response.content)

# Fonction pour redimensionner une image
def resize_image(input_path, output_path, size):
    image = Image.open(input_path)
    resized_image = image.resize(size)
    resized_image.save(output_path)

# Fonction pour supprimer l'arrière-plan en utilisant remove.bg
def remove_background(img_path, output_path):
    os.system(f"rembg i '{img_path}' '{output_path}'")

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

    # Créer le répertoire pour les images téléchargées
    download_dir = "./downloaded_images"
    os.makedirs(download_dir, exist_ok=True)

    # Créer le répertoire pour les images redimensionnées
    resized_dir = "./downloaded_images/resized"
    os.makedirs(resized_dir, exist_ok=True)

    # Créer le répertoire pour les images publiques
    public_dir = "../back/public/photos"
    os.makedirs(os.path.join(public_dir, "pro"), exist_ok=True)
    os.makedirs(os.path.join(public_dir, "fun"), exist_ok=True)

    # Insertion des données dans la table
    for personne in data:
        cursor.execute('''
            INSERT INTO person (nom, prenom, poste, equipe, agence, photo_pro, photo_fun)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        ''', (
            personne['nom'],
            personne['prenom'],
            personne['poste'],
            personne['equipe'],
            personne['agence'],
            personne.get('photo_pro', ''),
            personne.get('photo_fun', ''),
        ))

        # Redimensionner et supprimer l'arrière-plan si une photo professionnelle est disponible
        if personne.get('photo_pro', ''):
            img_path_pro = f"{download_dir}/{personne['nom']}-{personne['prenom']}_pro.jpg"
            resized_path_pro = f"{resized_dir}/{personne['nom']}-{personne['prenom']}_pro.jpg"
            output_path_pro = f"{public_dir}/pro/{personne['nom']}-{personne['prenom']}_pro.png"

            # Télécharger l'image
            download_image(personne['photo_pro'], img_path_pro)

            # Redimensionner l'image
            resize_image(img_path_pro, resized_path_pro, (972, 1462))

            # Supprimer l'arrière-plan
            remove_background(resized_path_pro, output_path_pro)

            # Nettoyer les fichiers temporaires
            os.remove(img_path_pro)
            os.remove(resized_path_pro)

            # Ajouter le chemin du fichier dans la base de données
            cursor.execute('''
                UPDATE person
                SET photo_pro = %s
                WHERE nom = %s AND prenom = %s
            ''', (f"/photos/pro/{personne['nom']}-{personne['prenom']}_pro.png", personne['nom'], personne['prenom']))

        # Redimensionner et supprimer l'arrière-plan si une photo fun est disponible
        if personne.get('photo_fun', ''):
            img_path_fun = f"{download_dir}/{personne['nom']}-{personne['prenom']}_fun.jpg"
            resized_path_fun = f"{resized_dir}/{personne['nom']}-{personne['prenom']}_fun.jpg"
            output_path_fun = f"{public_dir}/fun/{personne['nom']}-{personne['prenom']}_fun.png"

            # Télécharger l'image
            download_image(personne['photo_fun'], img_path_fun)

            # Redimensionner l'image
            resize_image(img_path_fun, resized_path_fun, (972, 1462))

            # Supprimer l'arrière-plan
            remove_background(resized_path_fun, output_path_fun)

            # Nettoyer les fichiers temporaires
            os.remove(img_path_fun)
            os.remove(resized_path_fun)

            # Ajouter le chemin du fichier dans la base de données
            cursor.execute('''
                UPDATE person
                SET photo_fun = %s
                WHERE nom = %s AND prenom = %s
            ''', (f"/photos/fun/{personne['nom']}-{personne['prenom']}_fun.png", personne['nom'], personne['prenom']))

    # Commit et fermeture de la connexion
    connection.commit()
    connection.close()

if __name__ == "__main__":
    json_url = "https://trombi.6tmphp.fr/data.json"
    data = get_json_data(json_url)

    if data:
        insert_data_into_database(data)
        print("Les données ont été insérées dans la base de données MySQL avec succès.")
