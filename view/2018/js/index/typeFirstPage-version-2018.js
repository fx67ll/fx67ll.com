// 防止动画导致下面的动画无法展现
$("#fx67ll-typed-box").resize(function() {
	let boxh = $("#fx67ll-typed-box").height();
	let screenh = $(document.body).height();
	if (boxh > screenh) {
		$("#fx67ll-typed-box").offset({
			top: -(boxh - screenh) - 100
		});
	}
});

// Type animation. This is a call back hell!
const fx67llTypeSpeed = 26;
const fx67llStartDelay = 200;
const fx67llNextTimeSpace = 1000;

let typed = new Typed('#fx67ll-typed', {
	stringsElement: '#fx67ll-typed-strings',
	typeSpeed: fx67llTypeSpeed,
	onComplete: (self) => {
		setTimeout(function() {
			$("#fx67ll-typed").next().hide();
		}, fx67llNextTimeSpace);
	},
});
