window.onload = function () {
	// get container
	var box = document.getElementById('container');

	//get image NodeList sets
	var imgs = box.getElementsByTagName('img');

	//get width of one image
	var imgWidth = imgs[0].offsetWidth;

	//set width of exposed image
	var exposeWidth = 160;

	//set width of container
	var boxWidth = imgWidth + (imgs.length - 1) * exposeWidth;
	box.style.width = boxWidth + 'px';

	function setImgsPos() {
		//set original position of every door
		for (var i = 1, len = imgs.length; i < len; i++) {
			imgs[i].style.left = imgWidth + exposeWidth * (i - 1) + 'px';
		}
	}
	setImgsPos();

	//calculate move distance when open every door
	var translate = imgWidth - exposeWidth;

	//bond event for every door
	for (var i = 0, len = imgs.length; i < len; i++) {
		//use immediate function expression to get different i value
		(function(i) {
		imgs[i].onmouseover = function () {
			// reset the position of every door
			setImgsPos();
			// open the door; second door to the current door
			for (var j = 1; j <= i; j++) {
				imgs[j].style.left = parseInt(imgs[j].style.left, 10) - translate + 'px';
			}
		};
	})(i);

	}
};
