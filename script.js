const winningCombinations  = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

const grid = () => Array.from(document.getElementsByClassName('quater'));
const quaterNumId = (quaterEl) => Number.parseInt(quaterEl.id.replace('quater', ''));
const emptyQuaters = () => grid().filter(_quaterEl => _quaterEl.innerText === '');
const allSame = (arr) => arr.every(_quaterEl => _quaterEl.innerText === arr[0].innerText && _quaterEl !== '');

const takeTurn = (index, letter) => grid()[index].innerText = letter;
const opponentChoice = () => quaterNumId(emptyQuaters()[Math.floor(Math.random() * emptyQuaters().length)]);

const endGame = () => {
    checkForVictory
}

const opponentTurn = () => {
    disableListeners();
    setTimeout(() => {
        takeTurn(opponentChoice(), 'o');
        enableListeners();
    }, 1000);
}

const click = ($event) => {
    takeTurn(quaterNumId($event.target), 'x');
    opponentTurn();
};

const enableListeners = () => grid().forEach(_quaterEl => _quaterEl.addEventListener('click', click));

const disableListeners = () => grid().forEach(_quaterEl => _quaterEl.removeEventListener('click', click));

enableListeners();