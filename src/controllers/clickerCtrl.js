
let input = document.getElementById("clickerInput");
let button = document.getElementById("clickerButton");

console.log('game.click');

let game = {
	score:0,
	start: function (argument) {
		button.onclick=game.click;
		game.score = 0;
		button.innerHTML="Нажимай!";
		setTimeout(game.finish,10000);
	},
	click: function (argument) {
		game.score++;
		input.value = game.score;
	},
	finish: function (argument) {
		alert("score" + game.score);
		button.onclick = game.start;
		button.innerHTML = "Начнем?"
	},
}

button.onclick = game.start;

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))