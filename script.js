
            /converts JSON strings to JavaScript objects/ 
            let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
            updateScoreElement();
    
            function playGame(playerMove) {
                const computerMove = pickComputerMove();
                let result = '';
    
                if (playerMove === 'Scissors') {
                    if (computerMove === 'Rock') {
                        result = 'You Lose';
                    } else if (computerMove === 'Paper') {
                        result = 'You Win';
                    } else {
                        result = 'Tie';
                    }
                } else if (playerMove === 'Paper') {
                    if (computerMove === 'Rock') {
                        result = 'You Win';
                    } else if (computerMove === 'Paper') {
                        result = 'Tie';
                    } else {
                        result = 'You Lose';
                    }
                } else if (playerMove === 'Rock') {
                    if (computerMove === 'Rock') {
                        result = 'Tie';
                    } else if (computerMove === 'Paper') {
                        result = 'You Lose';
                    } else {
                        result = 'You Win';
                    }
                }
    
                if (result === 'You Win') {
                    score.wins += 1;
                } else if (result === 'You Lose') {
                    score.losses += 1;
                } else {
                    score.ties += 1;
                }
                
                /Converts JavaScript objects to JSON strings/ 
                localStorage.setItem('score', JSON.stringify(score));
                updateScoreElement();
                document.querySelector('.js-result').innerHTML = result;
                document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;
            }
    
            function pickComputerMove() {
                const randomNumber = Math.random();
                if (randomNumber < 1 / 3) {
                    return 'Rock';
                } else if (randomNumber < 2 / 3) {
                    return 'Paper';
                } else {
                    return 'Scissors';
                }
            }
    
            function updateScoreElement() {
                document.querySelector('.js-scores').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
            }