function drawSprite(img, x, y, w, h) {
	ctx.drawImage(img, x, y);
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + w, y);
	ctx.lineTo(x + w, y + h);
	ctx.lineTo(x, y + h);
}

function getMousePos(e) {
	var rect = c.getBoundingClientRect(),
		scaleX = c.width / rect.width,
		scaleY = c.height / rect.height;
	  return {
		x: (e.clientX - rect.left) * scaleX,
		y: (e.clientY - rect.top) * scaleY
	}
}

function mouseWithinBounds(e, x1, y1, x2, y2) {
	var m = getMousePos(e);
	return (m.x > x1 && m.y > y1 && m.x < x2 && m.y < y2);
}

function clearScreen() {
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.rect(0, 0, c.width, c.height);
	ctx.fillStyle = "black";
	ctx.fill();
}

function playAudio(str, override, loop) {
	if (override) {
		if (currentAudio != null)
			currentAudio.pause();

		currentAudio = new Audio(str);
		currentAudio.play();
		currentAudio.loop = loop;
	} else {
		var audio = new Audio(str);
		audio.play();
		audio.loop = loop;
	}
}

function writeText(str, x, y) {
	ctx.font = font;
	ctx.fillStyle = fontColor;
	ctx.fillText(str, x, y);
}

var keyState = {
	W: false,
	A: false,
	S: false,
	D: false,
	E: false,
	F: false,
	X: false,
	C: false,
	V: false,
	P: false,
	Space: false,
	Shift: false,
};

/* graphics */
var c = document.getElementById("game");
c.width = 800;
c.height = 800;
var ctx = c.getContext("2d");
var font = "30px Anonymous Pro";
var fontColor = "green";

/* audio */
var currentAudio = [];

/* framerate */
var fpsInterval = 1000 / 60;
var then = Date.now();
var startTime = then;
var elapsed = 0;

window.addEventListener('keydown', function(event) {
	keyState.Shift = event.shiftKey;
	switch (event.code) {
		case "KeyW":
			keyState.W = true;
			break;
		case "KeyA":
			keyState.A = true;
			break;
		case "KeyS":
			keyState.S = true;
			break;
		case "KeyD":
			keyState.D = true;
			break;
		case "KeyE":
			keyState.E = true;
			break;
		case "KeyF":
			keyState.F = true;
			break;
		case "KeyX":
			keyState.X = true;
			break;
		case "KeyC":
			keyState.C = true;
			break;
		case "KeyV":
			keyState.V = true;
			break;
		case "Shift":
			keyState.V = true;
			break;
		case "Space":
			keyState.Space = true;
			break;
	}

});
window.addEventListener('keyup', function(event) {
	keyState.Shift = event.shiftKey;
	switch (event.code) {
		case "KeyW":
			keyState.W = false;
			break;
		case "KeyA":
			keyState.A = false;
			break;
		case "KeyS":
			keyState.S = false;
			break;
		case "KeyD":
			keyState.D = false;
			break;
		case "KeyE":
			keyState.E = false;
			break;
		case "KeyF":
			keyState.F = false;
			break;
		case "KeyX":
			keyState.X = false;
			break;
		case "KeyC":
			keyState.C = false;
			break;
		case "KeyV":
			keyState.V = false;
			break;
		case "Shift":
			keyState.V = false;
			break;
		case "Space":
			keyState.Space = false;
			break;
	}
});
