const myCards = [
    {
        name: 'Black Panther',
        img:  "https://i.imgur.com/qP0bJT5.png" // black panther
    },
    {
        name: 'Black Widow',
        img: "https://i.imgur.com/fUHw4gt.png", // black widow
    },
    {
        name: 'Captain America',
        img: "https://i.imgur.com/5anvbwL.png", // cpt america
    },
    {
        name: 'Dr Strange',
        img: "https://i.imgur.com/JzNbnhV.png", //dr strange
    },
    {
        name: 'Hawkeye',
        img: "https://i.imgur.com/oY6y7lw.png", //hawkeye
    },
    {
        name: 'Hulk',
        img: "https://i.imgur.com/moOFins.png", //hulk
    },   
    {
        name: 'Iron Man',
        img: "https://i.imgur.com/QobsrTi.png", //iron man
    },
    {
        name: 'Thor',
        img: "https://i.imgur.com/A7IRHNi.png", //thor
    },
    {
        name: 'Black Panther',
        img:  "https://i.imgur.com/qP0bJT5.png" // black panther
    },
    {
        name: 'Black Widow',
        img: "https://i.imgur.com/fUHw4gt.png", // black widow
    },
    {
        name: 'Captain America',
        img: "https://i.imgur.com/5anvbwL.png", // cpt america
    },
    {
        name: 'Dr Strange',
        img: "https://i.imgur.com/JzNbnhV.png", //dr strange
    },
    {
        name: 'Hawkeye',
        img: "https://i.imgur.com/oY6y7lw.png", //hawkeye
    },
    {
        name: 'Hulk',
        img: "https://i.imgur.com/moOFins.png", //hulk
    },   
    {
        name: 'Iron Man',
        img: "https://i.imgur.com/QobsrTi.png", //iron man
    },
    {
        name: 'Thor',
        img: "https://i.imgur.com/A7IRHNi.png", //thor
    }
]


//apps state variables
let count = 0
let cardsChosen = []
let cardsChosenId = []
let cardsMatched = []


//cached elements
// const resetBtn = document.querySelector('button')
const triesLeft = document.querySelector('aside')
const winLoss = document.querySelector('footer')
const gridEl = document.querySelector('.grid')
const card = document.createElement('img')
const cardsEl = document.querySelectorAll('img')



// add event listeners     
gridEl.addEventListener('click', countClicks)


//funcions
function init() {
    myCards.sort(() => 0.5 - Math.random())
    addCards()
}


function addCards() {
    for (let i = 0; i < myCards.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', "https://i.imgur.com/qbwmhdy.png")//blue square
        card.setAttribute('data-id', i)
        card.addEventListener('click', revealCards)
        gridEl.appendChild(card)
    }
}

function revealCards() {
    console.log('revealCards firing')
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
        cardsEl[firstClick].setAttribute('src', "https://i.imgur.com/Kw8ttMh.png")//white square
        cardsEl[secondClick].setAttribute('src', "https://i.imgur.com/Kw8ttMh.png")//white square
        cardsMatched.push(cardsChosen)
    } else {
        cardsEl[firstClick].setAttribute('src', "https://i.imgur.com/qbwmhdy.png")//blue square
        cardsEl[secondClick].setAttribute('src', "https://i.imgur.com/qbwmhdy.png")//blue square
    }
    cardsChosen = []
    cardsChosenId = []
    if (cardsMatched.length === myCards.length/2 && count < 35) {
        console.log('hitting')
        winLoss.innerHTML = 'You Are Victorious!'
    } else if (count > 35) {
        winLoss.innerHTML = 'YOU LOSE!'
    }
}


function countClicks() {
    console.log('countClicks firing')
    count += 1 
    console.log(count)
    const clickData = document.getElementById('clicks');
    clickData.textContent = "Number of Clicks ("+ count +")"
}

init();
