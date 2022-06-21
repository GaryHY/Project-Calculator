/* On utilise un fichier jaavscript pour ajouter les styles afin de 
ne pas surcharger le fichier HTML.
Ce truc n'est utilsie que si j'utilise tailwind avec CDN ce qui n'est pas mon cas !
Là je vais plutot utilser le @apply dans mon fichier input !
*/

const bodyClass = "bg-purple-800 bg-gradient-to-br from-blue-300 bg-opacity-25";
const bdy = document.querySelector('body');
bodyClass.split(" ").forEach(cls => bdy.classList.add(cls));
console.log("Je suis dnas le javascript")

/*
const number = document.querySelector('.number');

const operator = document.querySelector('.operator');

    <div id="calculatorBody" class="bg-fullblack opacity-95 rounded-lg">
        <div id="firstRow" class="flex p-4">
            <div id="textCont" class="w-3/4"></div>
            <div class="w-1/4 text-white font-bold bg-blackground opacity-92 rounded-lg p-3">AC</div>
        </div>
        <div id="secondRow" class="flex p-4">
            <button class="number w-1/4 p-3 rounded-lg text-white bg-blackground">7</button>
            <button class="number w-1/4 p-3 rounded-lg text-white">8</button>
            <button class="number w-1/4 p-3 rounded-lg text-white">9</button>
            <button class="number w-1/4 px-4 py-2 rounded-lg text-white hover:bg-red-300">/</button>

            
        </div>
    </div>
*/
 
