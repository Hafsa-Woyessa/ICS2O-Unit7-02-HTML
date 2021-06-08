// this connects the "guess" button to the "random" fanction
document.getElementById('button').addEventListener('click', comparision)
let userInput = 0

function comparision () {
  // get user input and convert to an integer
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  // this checks if userInput is less than 0
  if (userInput < 0) {
    document.getElementById('answer').innerHTML = 'Negative'
  } else {
    document.getElementById('answer').innerHTML = 'Positive'
  }
}
