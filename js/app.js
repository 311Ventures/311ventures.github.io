// play button
document.querySelector('#fireButton').addEventListener('click', function() {
	var flames = document.getElementById('flames')
	flames.play();
	console.log('bitch im a cow')
});

// stop button
document.querySelector('#putOutFire').addEventListener('click', function() {
	flames.pause();
	console.log('no can handle')
});

// time test
var time = new Date();
min = time.getMinutes();
hour = time.getHours();

// this logic probably wrong
if (hour == 3 || hour == 15 && min == 11) {
	flames.play();
}

// hanukkah mode
// stop button
document.querySelector('#hanukkahMode').addEventListener('click', function() {
	console.log('clickkkk!')
	document.getElementById('img').style.backgroundImage = "url('img/311_hanukkah.jpg')"
	this.style.display = "none"
});



