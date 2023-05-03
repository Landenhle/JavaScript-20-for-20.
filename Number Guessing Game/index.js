
var guess = prompt('Please guess a number between 0 and 5.');
guess = Number(guess);
var randomNum = Math.floor(Math.random() * 6);

if(guess == randomNum){
    console.log('You guessed the right number '+ randomNum);
}else{
    console.log('Nope,please try again.');
}

var answer = guess == randomNum ? console.log('You guessed the right number ' + randomNum ) : console.log('Nope, please try again.');