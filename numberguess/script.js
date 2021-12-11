numberGuess()

function numberGuess() {
    let number = Math.floor(Math.random() * 100) + 1
    let guess = 0
    let guessCount = 0
    let guessMax = 10
    let guessMin = 1
    let guessResult = ''

    while (guess !== number) {
        guess = parseInt(prompt('Guess a number between 1 and 100'))
        guessCount++
        if (guess > number) {
            guessResult = 'Too high.'
            alert(guessResult)
            guessMax = guess
        } else if (guess < number) {
            guessResult = 'Too low.'
            alert(guessResult)
            guessMin = guess
        } else if (guess === number) {
            guessResult = 'You got it!.'
            alert(guessResult)
            alert(`You guessed the number in ${guessCount} guesses!`)
            break
        } else {
            alert('The correct number is ' + number)
            guessResult = 'Since you "cheated", you cannot guess again.'
            alert(guessResult)
            break
        }
    }

    let playAgain = prompt('Do you want to play again? (y/n)')
    if (playAgain === 'y') {
        numberGuess()
    } else {
        alert('Bye Sweet! I love you!')
        window.close()
    }
}