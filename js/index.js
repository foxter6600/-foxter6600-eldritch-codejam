import ancientsData from '../data/ancients.js'

import deck from '../data/mythicCards/index.js'

let selectedAncient

const ancients = document.querySelector('.ancient-container')
const currentState = document.querySelector('.current-state')

// Event delegation
// Select ancient

let ancientNumber
let greenCardsCounter
let blueCardsCounter
let brownCardsCounter

const firstGreen = document.querySelector('.first > .green')
const firstBrown = document.querySelector('.first > .brown')
const firstBlue = document.querySelector('.first > .blue')

const secondGreen = document.querySelector('.second > .green')
const secondBrown = document.querySelector('.second > .brown')
const secondBlue = document.querySelector('.second > .blue')

const thirdGreen = document.querySelector('.third > .green')
const thirdBrown = document.querySelector('.third > .brown')
const thirdBlue = document.querySelector('.third > .blue')

ancients.onclick = function (event) {
  let ancient = event.target.closest('.ancient-card')

  if (ancient.classList.contains('azathoth')) {
    ancientNumber = 0
    greenCardsCounter =
      ancientsData[0].firstStage.greenCards +
      ancientsData[0].secondStage.greenCards +
      ancientsData[0].thirdStage.greenCards
    blueCardsCounter =
      ancientsData[0].firstStage.blueCards +
      ancientsData[0].secondStage.blueCards +
      ancientsData[0].thirdStage.blueCards
    brownCardsCounter =
      ancientsData[0].firstStage.brownCards +
      ancientsData[0].secondStage.brownCards +
      ancientsData[0].thirdStage.brownCards
  } else if (ancient.classList.contains('cthulhu')) {
    ancientNumber = 1
    greenCardsCounter =
      ancientsData[1].firstStage.greenCards +
      ancientsData[1].secondStage.greenCards +
      ancientsData[1].thirdStage.greenCards

    blueCardsCounter =
      ancientsData[1].firstStage.blueCards +
      ancientsData[1].secondStage.blueCards +
      ancientsData[1].thirdStage.blueCards

    brownCardsCounter =
      ancientsData[1].firstStage.brownCards +
      ancientsData[1].secondStage.brownCards +
      ancientsData[1].thirdStage.brownCards
  } else if (ancient.classList.contains('iogSothoth')) {
    ancientNumber = 2
    greenCardsCounter =
      ancientsData[2].firstStage.greenCards +
      ancientsData[2].secondStage.greenCards +
      ancientsData[2].thirdStage.greenCards

    blueCardsCounter =
      ancientsData[2].firstStage.blueCards +
      ancientsData[2].secondStage.blueCards +
      ancientsData[2].thirdStage.blueCards

    brownCardsCounter =
      ancientsData[2].firstStage.brownCards +
      ancientsData[2].secondStage.brownCards +
      ancientsData[2].thirdStage.brownCards
  } else if (ancient.classList.contains('shubNiggurath')) {
    ancientNumber = 3
    greenCardsCounter =
      ancientsData[3].firstStage.greenCards +
      ancientsData[3].secondStage.greenCards +
      ancientsData[3].thirdStage.greenCards

    blueCardsCounter =
      ancientsData[3].firstStage.blueCards +
      ancientsData[3].secondStage.blueCards +
      ancientsData[3].thirdStage.blueCards

    brownCardsCounter =
      ancientsData[3].firstStage.brownCards +
      ancientsData[3].secondStage.brownCards +
      ancientsData[3].thirdStage.brownCards
  }

  if (!ancient) return

  if (!ancients.contains(ancient)) return

  selectAncient(ancient)
}

function selectAncient(ancient) {
  if (selectedAncient) {
    selectedAncient.classList.remove('active')
  }
  selectedAncient = ancient
  selectedAncient.classList.add('active')
}

// Select difficulty

let selectedDifficulty
const difficultyContainer = document.querySelector('.difficulty-container')

difficultyContainer.onclick = function (event) {
  let difficulty = event.target.closest('.difficulty')

  if (!difficulty) return

  if (!difficultyContainer.contains(difficulty)) return

  selectDifficulty(difficulty)
}

function selectDifficulty(difficulty) {
  if (selectedDifficulty) {
    selectedDifficulty.classList.remove('active')
  }
  selectedDifficulty = difficulty
  selectedDifficulty.classList.add('active')

  difficultyContainer.style.display = 'none'
  shuffleButton.style.display = 'block'
}

/////////

const shuffleButton = document.querySelector('.shuffle-button')
let gameDeck

// get random number
function getRandomNum(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//shuffle button

function shuffleDeck() {
  // deck

  let greenDeck = new Set()
  let brownDeck = new Set()
  let blueDeck = new Set()

  //get deck
  function getRandomGreen() {
    while (greenDeck.size < greenCardsCounter) {
      greenDeck.add(deck.greenCardsData[getRandomNum(0, 17)])
    }
  }

  function getRandomBrown() {
    while (brownDeck.size < brownCardsCounter) {
      brownDeck.add(deck.brownCardsData[getRandomNum(0, 20)])
    }
  }

  function getRandomBlue() {
    while (blueDeck.size < blueCardsCounter) {
      blueDeck.add(deck.blueCardsData[getRandomNum(0, 11)])
    }
  }

  let firstStageDeck = []
  let secondStageDeck = []
  let thirdStageDeck = []

  // shuffle Array
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  function getFirstStageDeck() {
    for (let i = 0; i < ancientsData[ancientNumber].firstStage.greenCards; i++) {
      firstStageDeck.push(greenArr[0])
      greenArr.shift()
    }
    for (let i = 0; i < ancientsData[ancientNumber].firstStage.brownCards; i++) {
      firstStageDeck.push(brownArr[0])
      brownArr.shift()
    }
    for (let i = 0; i < ancientsData[ancientNumber].firstStage.blueCards; i++) {
      firstStageDeck.push(blueArr[0])
      blueArr.shift()
    }
    shuffle(firstStageDeck)
    // console.log(firstStageDeck)
  }
  function getSecondStageDeck() {
    for (let i = 0; i < ancientsData[ancientNumber].secondStage.greenCards; i++) {
      secondStageDeck.push(greenArr[0])
      greenArr.shift()
    }
    for (let i = 0; i < ancientsData[ancientNumber].secondStage.brownCards; i++) {
      secondStageDeck.push(brownArr[0])
      brownArr.shift()
    }
    for (let i = 0; i < ancientsData[ancientNumber].secondStage.blueCards; i++) {
      secondStageDeck.push(blueArr[0])
      blueArr.shift()
    }
    shuffle(secondStageDeck)
  }

  function getThirdStageDeck() {
    for (let i = 0; i < ancientsData[ancientNumber].thirdStage.greenCards; i++) {
      thirdStageDeck.push(greenArr[0])
      greenArr.shift()
    }
    for (let i = 0; i < ancientsData[ancientNumber].thirdStage.brownCards; i++) {
      thirdStageDeck.push(brownArr[0])
      brownArr.shift()
    }
    for (let i = 0; i < ancientsData[ancientNumber].thirdStage.blueCards; i++) {
      thirdStageDeck.push(blueArr[0])
      blueArr.shift()
    }
    shuffle(thirdStageDeck)
  }

  getRandomGreen()
  getRandomBrown()
  getRandomBlue()

  let greenArr = Array.from(greenDeck)
  let brownArr = Array.from(brownDeck)
  let blueArr = Array.from(blueDeck)
  console.log(`grA ${greenArr}`)
  console.log(greenDeck)

  getFirstStageDeck()
  getSecondStageDeck()
  getThirdStageDeck()

  firstGreen.textContent = ancientsData[ancientNumber].firstStage.greenCards
  firstBrown.textContent = ancientsData[ancientNumber].firstStage.brownCards
  firstBlue.textContent = ancientsData[ancientNumber].firstStage.blueCards

  secondGreen.textContent = ancientsData[ancientNumber].secondStage.greenCards
  secondBrown.textContent = ancientsData[ancientNumber].secondStage.brownCards
  secondBlue.textContent = ancientsData[ancientNumber].secondStage.blueCards

  thirdGreen.textContent = ancientsData[ancientNumber].thirdStage.greenCards
  thirdBrown.textContent = ancientsData[ancientNumber].thirdStage.brownCards
  thirdBlue.textContent = ancientsData[ancientNumber].thirdStage.blueCards

  deckBack.style.display = 'block'
  gameDeck = [...firstStageDeck, ...secondStageDeck, ...thirdStageDeck]
  console.log(gameDeck)
  shuffleButton.style.display = 'none'
  currentState.style.display = 'flex'
}

shuffleButton.addEventListener('click', shuffleDeck)

// deck click
let deckBack = document.querySelector('.deck')
let deckFace = document.querySelector('.last-card')

function deckClick() {
  let imgUrl
  let color

  try {
    imgUrl = gameDeck[0].cardFace
    color = gameDeck[0].color
    console.log(`color ${color}`)

    deckFace.style.backgroundImage = `url('/assets/MythicCards/${color}/${imgUrl}')`

    console.log(gameDeck[0])

    if (color == 'green') {
      if (firstGreen.textContent > 0) {
        firstGreen.textContent = firstGreen.textContent - 1
      } else if (secondGreen.textContent > 0) {
        secondGreen.textContent = secondGreen.textContent - 1
      } else if (thirdGreen.textContent > 0) {
        thirdGreen.textContent = thirdGreen.textContent - 1
      }
    } else if (color == 'brown') {
      if (firstBrown.textContent > 0) {
        firstBrown.textContent = firstBrown.textContent - 1
      } else if (secondBrown.textContent > 0) {
        secondBrown.textContent = secondBrown.textContent - 1
      } else if (thirdBrown.textContent > 0) {
        thirdBrown.textContent = thirdBrown.textContent - 1
      }
    } else if (color == 'blue') {
      if (firstBlue.textContent > 0) {
        firstBlue.textContent = firstBlue.textContent - 1
      } else if (secondBlue.textContent > 0) {
        secondBlue.textContent = secondBlue.textContent - 1
      } else if (thirdBlue.textContent > 0) {
        thirdBlue.textContent = thirdBlue.textContent - 1
      }
    }

    gameDeck.shift()
  } catch {
    deckBack.style.display = 'none'
  }
}

deckBack.addEventListener('click', deckClick)
