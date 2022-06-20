/* On utilise un fichier jaavscript pour ajouter les styles afin de 
ne pas surcharger le fichier HTML */

const bodyClass = "bg-purple-800 bg-gradient-to-br from-blue-300 bg-opacity-25";
const bdy = document.querySelector('body');
bodyClass.split(" ").forEach(cls => bdy.classList.add(cls));

const number = document.querySelector('.number');

const operator = document.querySelector('.operator');

 
