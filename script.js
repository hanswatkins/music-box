const c1Button = document.querySelector('#c1');
const c1Note = document.querySelector('#c1Audio');

const dButton = document.querySelector('#d');
const dNote = document.querySelector('#dAudio');

const eButton = document.querySelector('#e');
const eNote = document.querySelector('#eAudio');

const fButton = document.querySelector('#f');
const fNote = document.querySelector('#fAudio');

// const gButton = document.querySelector('#g');
// const gNote = document.querySelector('#gAudio');

// const aButton = document.querySelector('#a');
// const aNote = document.querySelector('#aAudio');

// const bButton = document.querySelector('#b');
// const bNote = document.querySelector('#bAudio');

// const cButton = document.querySelector('#c');
// const cNote = document.querySelector('#cAudio');

c1Button.onclick = () => {
	c1Note.currentTime = 0;
	c1Audio.play();
};

dButton.onclick = () => {
	dNote.currentTime = 0;
	dAudio.play();
};

eButton.onclick = () => {
	eNote.currentTime = 0;
	eAudio.play();
};

fButton.onclick = () => {
	fNote.currentTime = 0;
	fAudio.play();
};

// gButton.onclick = () => {
// 	gNote.currentTime = 0;
// 	gAudio.play();
// };

// aButton.onclick = () => {
// 	aNote.currentTime = 0;
// 	aAudio.play();
// };

// bButton.onclick = () => {
// 	bNote.currentTime = 0;
// 	bAudio.play();
// };

// cButton.onclick = () => {
// 	cNote.currentTime = 0;
// 	cAudio.play();
// };

document.addEventListener('keydown', keyPressed);

function keyPressed(e) {
	if (e.repeat) return;
	if (e.code == 'KeyA') {
		c1Note.currentTime = 0;
		c1Audio.play();
		document.getElementById('c1').style.backgroundColor =
			'rgba(255, 255, 255, 0)';
	}
	if (e.code == 'KeyS') {
		dNote.currentTime = 0;
		dAudio.play();
		document.getElementById('d').style.backgroundColor =
			'rgba(255, 255, 255, 0)';
	}
	if (e.code == 'KeyD') {
		eNote.currentTime = 0;
		eAudio.play();
		document.getElementById('e').style.backgroundColor =
			'rgba(255, 255, 255, 0)';
	}
	if (e.code == 'KeyF') {
		fNote.currentTime = 0;
		fAudio.play();
		document.getElementById('f').style.backgroundColor =
			'rgba(255, 255, 255, 0)';
	}
	// if (e.code == 'KeyG') {
	// 	gNote.currentTime = 0;
	// 	gAudio.play();
	// 	document.getElementById('g').style.backgroundColor = '#1a9ddb';
	// }
	// if (e.code == 'KeyH') {
	// 	aNote.currentTime = 0;
	// 	aAudio.play();
	// 	document.getElementById('a').style.backgroundColor = '#a13fad';
	// }
	// if (e.code == 'KeyJ') {
	// 	bNote.currentTime = 0;
	// 	bAudio.play();
	// 	document.getElementById('b').style.backgroundColor = '#aa6ff2';
	// }
	// if (e.code == 'KeyK') {
	// 	cNote.currentTime = 0;
	// 	cAudio.play();
	// 	document.getElementById('c').style.backgroundColor = '#f26fd4';
	// }
}

document.addEventListener('keyup', keyUnpressed);

function keyUnpressed(e) {
	if (e.code == 'KeyA') {
		document.getElementById('c1').style.backgroundColor =
			'rgba(255, 255, 255, 0.3)';
	}
	if (e.code == 'KeyS') {
		document.getElementById('d').style.backgroundColor =
			'rgba(255, 255, 255, 0.3)';
	}
	if (e.code == 'KeyD') {
		document.getElementById('e').style.backgroundColor =
			'rgba(255, 255, 255, 0.3)';
	}
	if (e.code == 'KeyF') {
		document.getElementById('f').style.backgroundColor =
			'rgba(255, 255, 255, 0.3)';
	}
	// if (e.code == 'KeyG') {
	// 	document.getElementById('g').style.backgroundColor = '#18323e';
	// }
	// if (e.code == 'KeyH') {
	// 	document.getElementById('a').style.backgroundColor = '#331f35';
	// }
	// if (e.code == 'KeyJ') {
	// 	document.getElementById('b').style.backgroundColor = '#342943';
	// }
	// if (e.code == 'KeyK') {
	// 	document.getElementById('c').style.backgroundColor = '#43293d';
	// }
}
