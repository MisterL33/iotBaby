Groupe : 

JULIENNE Laurent
Yohann Bernard

Emulateur : 

Je conseil genymotion pour lancer mon application, bien que cela dois aussi marcher avec android studio ..


Configuration : 

npm install sur iotBaby et babyfootServer

installer genymotion(emulateur android) sur https://www.genymotion.com/fun-zone/ (gratuit)

Ouvrir genymotion et créer un nouveau terminal virtual avec ces caractéristiques : API 23 - android 6.0.0 (J'utilise le terminal Google Nexus 5X - 6.0.0 - API 23)

Démarrer le serveur en allant dans le dossier babyfootServer et en lançant la commande "echo 1| sails lift"

IMPORTANT !! : pour que l'application accède au serveur, il faut mettre son ip dans le fichier ipconfig situé dans iotBaby/src/config

Si le serveur affiche : A hook (`orm`) failed to load! c'est qu'il faut lancer mysql

Il faut ensuite indiquer la base de données utilisé, cela se fait dans le fichier datastores.js situé dans babyfoortServer/config/

Une fois le terminal créer, démarrer le puis lancer la commande "react-native run-android" à la racine du dossier du projet, react-native va automatiquement détecter qu'un terminal virtuel est lancé et lancera le projet dessus.

P.S : 
- Ouvrir menu DEV : ctrl + M(sur l'application)
