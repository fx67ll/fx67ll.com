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
const fx67llTypeSpeed = 28;
const fx67llStartDelay = 188;
const fx67llNextTimeSpace = 888;
let fx67llStringList = [
	// "作为浩鲸3年生，fx67ll 将继续致力于提升 DMC 的前端交互使用体验，并努力转型为 DMC 团队里的一名全栈开发工程师 🐳⌨️💻",
	"作为浩鲸3年生，fx67ll 将聚焦 AI 领域深度学习，不断强化全栈开发工程师的职业技术素养，努力做好每一件小事 🐳⌨️💻",
	"fx67ll 在前端开发工作领域掌握 Html5/Css3、JS/TS、Sass/Less、Vue/React全家桶、ElementUI/AntDesign/ArcoDesign组件库、Umi、Echarts/D3js、uni-app、Three.js、OpenLayers/Cesium/ArcGis、乾坤前端微应用加载器 🔨🔧⚙️",
	"fx67ll 在后端开发工作领域掌握 Java、SpringBoot/SpringCloud、MySQL/Redis/MongoDB、Nodejs/Express、Linux、Nginx、Jeckins 🧱⛱️🎊",
	// "在这里可以了解到工作这些年 fx67ll 所掌握的各种技术技能点 🧵🧶🕹️",
	// "主要包括 fx67ll 在前端开发工作领域所掌握的各类技术框架组件 Html5/Css3、JS/TS、Sass/Less、Vue/React全家桶、Ele/Ant/Arco组件库、Umi、Echarts/D3js、uni-app、Threejs、OpenLayers/Cesium/ArcGis、乾坤前端微应用加载器 🔨🔧⚙️",
	// "以及包括 fx67ll 在工作生活之余自己所研究的web后端以及数据库开发技术框架Java、SpringBoot/Cloud、MySQL/Redis/MongoDB、Nodejs/Express、Linux、Nginx、Jeckins 🧱⛱️🎊",
	"首页的废话即将要说完了，通过点击页面中的任意位置来查看下一页吧 🖱️🖱️🖱️",
	"点击查看下一页吧️ 🎉🎉🎉"
];

// 这里使用 Promise 重新编写异步操作
let typed = new Typed('#fx67ll-typed', {
	stringsElement: '#fx67ll-typed-strings',
	typeSpeed: fx67llTypeSpeed,
	onComplete: (self) => {
		setTimeout(function() {
			$("#fx67ll-typed").next().hide();
			$("#fx67ll-typed").append("<br><br><span id='fx67ll-typed-first'></span>");
			let typed_next = new Typed('#fx67ll-typed-first', {
				strings: [fx67llStringList[0]],
				startDelay: fx67llStartDelay,
				typeSpeed: fx67llTypeSpeed,
				onComplete: (self) => {
					setTimeout(typeNextA, fx67llNextTimeSpace);
				},
			});
		}, fx67llNextTimeSpace);
	},
});

const typeNextA = () => {
	$("#fx67ll-typed-first").next().hide();
	$("#fx67ll-typed-first").append(
		"<br><br><span id='fx67ll-typed-second'></span>"
	);
	let typed_next = new Typed('#fx67ll-typed-second', {
		strings: [fx67llStringList[1]],
		startDelay: fx67llStartDelay,
		typeSpeed: fx67llTypeSpeed,
		onComplete: (self) => {
			setTimeout(typeNextB, fx67llNextTimeSpace);
		},
	});
};

const typeNextB = () => {
	$("#fx67ll-typed-second")
		.next().hide();
	$("#fx67ll-typed-second")
		.append(
			"<br><br><span id='fx67ll-typed-third'></span>"
		);
	let typed_next =
		new Typed(
			'#fx67ll-typed-third', {
				strings: [fx67llStringList[2]],
				startDelay: fx67llStartDelay,
				typeSpeed: fx67llTypeSpeed,
				onComplete: (
					self
				) => {
					// setTimeout(typeNextC, fx67llNextTimeSpace);
					setTimeout(typeNextD, fx67llNextTimeSpace);
				},
			});
};

// const typeNextC = () => {
// 	$("#fx67ll-typed-third")
// 		.next()
// 		.hide();
// 	$("#fx67ll-typed-third")
// 		.append(
// 			"<br><br><span id='fx67ll-typed-fourth'></span>"
// 		);
// 	let typed_next =
// 		new Typed(
// 			'#fx67ll-typed-fourth', {
// 				strings: [fx67llStringList[3]],
// 				startDelay: fx67llStartDelay,
// 				typeSpeed: fx67llTypeSpeed,
// 				onComplete: (
// 					self
// 				) => {
// 					setTimeout(typeNextD, fx67llNextTimeSpace);
// 				},
// 			}
// 		);
// };

const typeNextD = () => {
	// $("#fx67ll-typed-fourth")
	$("#fx67ll-typed-third")
		.next()
		.hide();
	// $("#fx67ll-typed-fourth")
	$("#fx67ll-typed-third")
		.append(
			"<br><br><span id='fx67ll-typed-fifth'></span>"
		);
	let typed_next =
		new Typed(
			'#fx67ll-typed-fifth', {
				// strings: [fx67llStringList[4], fx67llStringList[5]],
				strings: [fx67llStringList[4 - 1], fx67llStringList[5 - 1]],
				startDelay: fx67llStartDelay,
				typeSpeed: fx67llTypeSpeed,
				backSpeed: 0,
				backDelay: 1000,
				onComplete: (
					self
				) => {
					console.log('Type animation is finished ~~~');
					setTimeout(typeNextEgg, 4498);
				},
			}
		);
};

const typeNextEgg = () => {
	console.log('Find some eggs !!!');
	$("#fx67ll-typed-box")
		.offset({
			top: -($("#fx67ll-typed-box").height() / 2 - (window.innerHeight / 2))
		});
	$("#fx67ll-typed-box")
		.html(
			"Welcome <strong><em class='fx67ll-a'>https://fx67ll.com</em></strong> ~"
		); // 添加隐藏彩蛋，for Love
	if (document.getElementsByClassName("fx67ll-a")) {
		$('.fx67ll-a').click(function() {
			window.open('https://love.fx67ll.com');
		});
	};
};