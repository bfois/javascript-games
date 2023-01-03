document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'fries',
            img: 'assets/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'assets/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'assets/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'assets/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'assets/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'assets/hotdog.png'
        },
        {
            name: 'fries',
            img: 'assets/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'assets/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'assets/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'assets/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'assets/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'assets/hotdog.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('#grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'assets/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'assets/blank.png')
            cards[optionTwoId].setAttribute('src', 'assets/blank.png')
            alert('Diste click en la misma imagen')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('Encontraste una coincidencia')
            cards[optionOneId].setAttribute('src', 'assets/white.png')
            cards[optionTwoId].setAttribute('src', 'assets/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
            console.log(cardsWon)
        } else {
            cards[optionOneId].setAttribute('src', 'assets/blank.png')
            cards[optionTwoId].setAttribute('src', 'assets/blank.png')
            alert('Lo siento, intentalo de nuevo')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Felicitaciones! Encontraste todas las coincidencias'
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})