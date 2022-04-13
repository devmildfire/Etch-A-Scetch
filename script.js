



const body = document.querySelector(`body`);

const container = document.createElement(`div`);
container.classList.add(`container`);
body.appendChild(container);

const numDiv = document.getElementById('numberOfSquaresDiv');
const moreDiv = document.getElementById('moreDiv');
const lessDiv = document.getElementById('lessDiv');
const resetDiv = document.getElementById('resetDiv');

const controlsDiv = document.getElementById('controlsDiv');

const divsArray = Array.from(controlsDiv.children);
divsArray.forEach(  (item) => { item.classList.add('unselectable') }  );

function makeMore(number) {
    if (number >= 100**2){
        return number
    };
    let root = number**0.5;
    root += 1;
    return root**2;
};

function makeLess(number) {
    if (number <= 4){
        return number
    };
    let root = number**0.5;
    root -= 1;
    return root**2;
};

function scrapBoard() {
    container.innerHTML = '';
};

function makeBoard() {
    let sideSize = Number(numDiv.innerText)**0.5;
    let numberOfSquares = sideSize**2;
    
    let r = document.querySelector(':root');
    r.style.setProperty('--sideSize', sideSize);
    
    for (i = 1; i <= numberOfSquares; i++) {
        let square = document.createElement(`div`);
        square.classList.add(`square`);
        // square.innerHTML = `${i}`;
        container.appendChild(square);
    };
    
    let squares = document.querySelectorAll(`.square`)
    
    const squaresArr = Array.from(squares);
    
    for (i = 0; i < squaresArr.length; i++) {
        squaresArr[i].addEventListener('mouseover', squareHover)
    }; 
};

function squareHover(e) {
    e.target.style = 'background-color: red';
};


makeBoard();

resetDiv.addEventListener('click', ()=>{
    scrapBoard();
    makeBoard();
});

moreDiv.addEventListener('click', ()=>{
    scrapBoard();
    numDiv.innerText = makeMore(Number(numDiv.innerText));
    makeBoard();
});

lessDiv.addEventListener('click', ()=>{
    scrapBoard();
    numDiv.innerText = makeLess(Number(numDiv.innerText));
    makeBoard();
});
