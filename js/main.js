var can;
var ctx;

var w;
var h;

var padLeft = 100;
var padTop = 100;

var girlWidth = 600;
var girlHeight = 300;

var deltaTime;
var lastTime;

var girlPic = new Image();
var starPic = new Image();

var stars = [];
var num = 60;

var alive = 0;

var switchy = false;

//初始化函数
function init() {
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");

	w = can.width;
	h = can.height;

	document.addEventListener('mousemove', mousemove, false);

	girlPic.src = "src/girl.jpg";
	starPic.src = "src/star.png";

	for (var i = 0; i < num; i++) {
		stars[i] = new starObj();
		stars[i].init();
	}

	lastTime = Date.now();
	gameLoop();
}

//刷新绘制的内容，动态化
function gameLoop() {
	//循环调用方法，让持续动起来
	window.requestAnimationFrame(gameLoop);//两针之间的时间间隔进行动态
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	fillCanvas();
	drawGirl();
	//drawStar();
	drawStars();

	aliveUpdate();
}

//绘制背景动画
function fillCanvas() {
	ctx.fillStyle = "#393550";
	ctx.fillRect(0, 0, w, h);
}

function drawGirl() {
	//drawImage(img, x, y,width,height,)   (0,0)左上角
	ctx.drawImage(girlPic, padLeft, padTop, girlWidth, girlHeight);
}

function mousemove(e) {
	if (e.offsetX || e.layerX) {

		var px = e.offsetX == undefined ? e.layerX : e.offsetX;
		var py = e.offsetY == undefined ? e.layerY : e.offsetY;

		if (px > padLeft && px < (padLeft + girlWidth) && py > padTop && py < (padTop + girlHeight)) {
			switchy = true;
		} else {
			switchy = false;
		}
	}
}