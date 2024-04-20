let btn = document.getElementById('btn');
let output =document.getElementById('output');
let quotes = [
	'“Be yourself; everyone else is already taken.” ― Oscar Wilde',
	'“Two things are infinite: the universe and human stupidity ; and Im not sure about the universe.”― Albert Einstein',
	'“Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.”― Roy T. Bennett, The Light in the Heart',
	'“Do not be pushed around by the fears in your mind. Be led by the dreams in your heart.”― Roy T. Bennett, The Light in the Heart',
	];	
 btn.addEventListener('click', function(){
	var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
	output.innerHTML = randomQuote;
})