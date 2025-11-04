// Tips Bubble Animation
if (document.getElementById("tip-bubble")) {
	setTimeout(function() {
		document.getElementById("tip-bubble").style.animation = "goDie 0.6s linear 1";
	}, 4800);
	setTimeout(function() {
		document.getElementById("tip-bubble").style.opacity = "0";
	}, 5400);
}

// -----------------------------------------------------------------
$('.fx67ll-bubble-url').find('span').hide();

// 当鼠标悬浮在父元素上时，显示子元素
$('.fx67ll-bubble-url').on('mouseenter', function() {
	$(this).find('span').show();
});

// 当鼠标移出父元素时，隐藏子元素
$('.fx67ll-bubble-url').on('mouseleave', function() {
	$(this).find('span').hide();
});

// 当点击子元素时，完成页面跳转
$('.fx67ll-bubble-url').on('click', 'span', function() {
	window.location.href = 'https://fx67ll.xyz';
});

// -----------------------------------------------------------------
// For https://fx67ll.xyz
if (document.getElementsByClassName("fx67ll-xyz")) {
	$('.fx67ll-xyz').click(function() {
		window.open('https://fx67ll.xyz');
	});
}

// For https://vue-ui.fx67ll.com
if (document.getElementsByClassName("fx67ll-vue-ui")) {
	$('.fx67ll-vue-ui').click(function() {
		window.open('https://vue-ui.fx67ll.com');
	});
}

// For https://map.fx67ll.com
if (document.getElementsByClassName("fx67ll-map")) {
	$('.fx67ll-map').click(function() {
		window.open('https://map.fx67ll.com');
	});
}

// For https://uni.fx67ll.com
if (document.getElementsByClassName("fx67ll-uni")) {
	$('.fx67ll-uni').click(function() {
		window.open('https://uni.fx67ll.com');
	});
}

// For https://three.fx67ll.com
if (document.getElementsByClassName("fx67ll-three")) {
	$('.fx67ll-three').click(function() {
		window.open('https://three.fx67ll.com');
	});
}

// For https://node.fx67ll.com
if (document.getElementsByClassName("fx67ll-node")) {
	$('.fx67ll-node').click(function() {
		window.open('https://node.fx67ll.com');
	});
}

// For https://vip.fx67ll.com
if (document.getElementsByClassName("fx67ll-java")) {
	$('.fx67ll-java').click(function() {
		window.open('https://vip.fx67ll.com');
	});
}

// For Jenkins
if (document.getElementsByClassName("fx67ll-jenkins")) {
	$('.fx67ll-jenkins').click(function() {
		window.open('https://run.fx67ll.com/jenkins');
	});
}

// For Love
if (document.getElementById("fx67ll-nan")) {
	$('#fx67ll-nan').click(function() {
		// window.open('https://guonan.love');
		window.open('https://love.fx67ll.com');
		console.log("I love u three thousand times！！！");
	});
}

// For fx67ll
if (document.getElementById("fx67ll-tree")) {
	$('#fx67ll-tree').click(function() {
		console.log('This is my tree —— https://fx67ll.xyz');
		window.open('https://fx67ll.xyz');
	});
}

// For steve
if (document.getElementById("fx67ll-steve")) {
	$('#fx67ll-steve').click(function() {
		console.log('Steve Jobs !!!');
	});
}

// For me
if (document.getElementById("fx67ll-dream")) {
	$('#fx67ll-dream').click(function() {
		console.log('Never Give Up !!!');
	});
}

// 2022 is dead ~
if (document.getElementById("fx67ll-2022")) {
	$('#fx67ll-2022').click(function() {
		console.log(
			'2022-01/02/03 is dead but 2022-04 is a new beginning , i must believe i can do it !!! pls come on !!! like what i do before !!!'
		);
	});
}

// For 426
if (document.getElementById("fx67ll-pc426")) {
	$('#fx67ll-pc426').click(function() {
		window.open('https://www.pc426.com');
	});
}

// -----------------------------------------------------------------
// egg
console.log(
	"####### #     #  #####  ####### #       #     \n#        #   #  #     # #    #  #       #       \n#         # #   #           #   #       #       \n#####      #    ######     #    #       #       \n#         # #   #     #   #     #       #\n#        #   #  #     #   #     #       #\n#       #     #  #####    #     ####### ####### "
);
console.log('keep running!');
console.log('https://fx67ll.xyz');

// nowYear
if (document.getElementById("nowYear")) {
	document.getElementById("nowYear").innerHTML = new Date().getFullYear();
}
