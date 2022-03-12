const myCards = [
    {
        name: 'Black Panther',
        img:  "https://i.imgur.com/qP0bJT5.png" 
    },
    {
        name: 'Black Widow',
        img: "https://i.imgur.com/fUHw4gt.png", 
    },
    {
        name: 'Captain America',
        img: "https://i.imgur.com/5anvbwL.png", 
    },
    {
        name: 'Dr Strange',
        img: "https://i.imgur.com/JzNbnhV.png", 
    },
    {
        name: 'Hawkeye',
        img: "https://i.imgur.com/oY6y7lw.png", 
    },
    {
        name: 'Hulk',
        img: "https://i.imgur.com/moOFins.png", 
    },   
    {
        name: 'Iron Man',
        img: "https://i.imgur.com/QobsrTi.png", 
    },
    {
        name: 'Thor',
        img: "https://i.imgur.com/A7IRHNi.png", 
    },
    {
        name: 'Black Panther',
        img:  "https://i.imgur.com/qP0bJT5.png" 
    },
    {
        name: 'Black Widow',
        img: "https://i.imgur.com/fUHw4gt.png", 
    },
    {
        name: 'Captain America',
        img: "https://i.imgur.com/5anvbwL.png", 
    },
    {
        name: 'Dr Strange',
        img: "https://i.imgur.com/JzNbnhV.png", 
    },
    {
        name: 'Hawkeye',
        img: "https://i.imgur.com/oY6y7lw.png", 
    },
    {
        name: 'Hulk',
        img: "https://i.imgur.com/moOFins.png", 
    },   
    {
        name: 'Iron Man',
        img: "https://i.imgur.com/QobsrTi.png", 
    },
    {
        name: 'Thor',
        img: "https://i.imgur.com/A7IRHNi.png", 
    }
]

let count = 0
let cardsChosen = []
let cardsChosenId = []
let cardsMatched = []


const triesLeft = document.querySelector('aside')
const winLoss = document.querySelector('footer')
const gridEl = document.querySelector('.grid')
const card = document.createElement('img')
const cardsEl = document.querySelectorAll('img')

   
gridEl.addEventListener('click', countClicks)


function init() {
    myCards.sort(() => 0.5 - Math.random())
    addCards()
}

function addCards() {
    for (let i = 0; i < myCards.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', "https://i.imgur.com/qbwmhdy.png")
        card.setAttribute('data-id', i)
        card.addEventListener('click', revealCards)
        gridEl.appendChild(card)
    }
}

function revealCards() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(myCards[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', myCards[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(match, 400)
    }
}

function match() {
    const cardsEl = document.querySelectorAll('img')
    const firstClick = cardsChosenId[0]
    const secondClick = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        cardsEl[firstClick].setAttribute('src', "https://i.imgur.com/Kw8ttMh.png")
        cardsEl[secondClick].setAttribute('src', "https://i.imgur.com/Kw8ttMh.png")
        cardsMatched.push(cardsChosen)
    } else {
        cardsEl[firstClick].setAttribute('src', "https://i.imgur.com/qbwmhdy.png")
        cardsEl[secondClick].setAttribute('src', "https://i.imgur.com/qbwmhdy.png")
    }
    cardsChosen = []
    cardsChosenId = []
    if (cardsMatched.length === myCards.length/2 && count < 35) {
        gridEl.removeEventListener('click', countClicks)
        winLoss.innerHTML = 'You Are Victorious!'
    } else if (count > 35) {
        gridEl.removeEventListener('click', countClicks)
        winLoss.innerHTML = 'YOU LOSE!'
    }
}

function countClicks() {
    count += 1 
    const clickData = document.getElementById('clicks');
    clickData.textContent = "Number of Clicks ("+ count +")"
}
const reset = document.querySelector('button')
reset.addEventListener('click', resetGame)
function resetGame() {
    document.location.reload()
}

init();
