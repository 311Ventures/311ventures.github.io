document.querySelector('#fireButton').addEventListener('click', function() {
	var flames = document.getElementById('flames')
	flames.play();
	console.log('bitch im a cow')
});

document.querySelector('#putOutFire').addEventListener('click', function() {
	flames.pause();
	console.log('no can handle')
});
