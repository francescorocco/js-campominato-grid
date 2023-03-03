// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. 

const bigSquareDom = document.getElementById('big-square');
let newButtonDom = document.getElementById('btn');



newButtonDom.addEventListener('click',
    function(){
        bigSquareDom.innerHTML='';

        for (let i = 0; i < 100; i++){

    const squareCreation = createNewSquare(i+1);

    squareCreation.addEventListener('click',
    
    function(){
        this.classList.add('clicked');
        console.log(squareCreation.innerHTML);
    }
    );

     bigSquareDom.append(squareCreation);
    }
    }

);


function createNewSquare(number){
    const squareCreation = document.createElement('div');
    squareCreation.classList.add('square');

    squareCreation.append(number);

    return squareCreation;
}