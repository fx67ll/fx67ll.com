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
let fx67llStringList = [
	"在这里您可以了解到工作三年以来 fx67ll 所掌握的各种技术技能点 🧵🧶🕹️",
	"主要包括 fx67ll 在大数据工作领域所掌握的各类技术组件 Hadoop、MapReduce、HDFS、Yarn、Zookeeper、Spark、Hive、HBase、Kafka、Redis、Sqoop、Flume、Azkaban、Atlas 🔨🔧⚙️",
	"以及包括 fx67ll 在工作生活之余自己所研究的web前后端开发技术框架 Vue、SpringBoot、MyBatis、Nodejs、MongoDB 🧱⛱️🎊",
	"在本站点浏览完成之后，您还可以访问 fx67ll的个人博客站点 https://fx67ll.xyz，以了解更多关于我的工作项目经验以及各类技术博文 💻📱🧐️",
	"首页的废话即将要说完了，您可以通过点击页面中的任意位置来查看下一页哦 🖱️🖱️🖱️",
	"点击查看下一页吧️ 🎉🎉🎉"
];
let typed = new Typed('#fx67ll-typed', {
	stringsElement: '#fx67ll-typed-strings',
	typeSpeed: fx67llTypeSpeed,
	onComplete: (self) => {
		setTimeout(function() {
			$("#fx67ll-typed").next().hide();
			$("#fx67ll-typed").append("<br><br><span id='fx67ll-typed-first'></span>");
			let typed_next = new Typed('#fx67ll-typed-first', {
				strings: [
					fx67llStringList[0]
				],
				startDelay: fx67llStartDelay,
				typeSpeed: fx67llTypeSpeed,
				onComplete: (self) => {
					setTimeout(function() {
						$("#fx67ll-typed-first").next().hide();
						$("#fx67ll-typed-first").append(
							"<br><br><span id='fx67ll-typed-second'></span>"
						);
						let typed_next = new Typed('#fx67ll-typed-second', {
							strings: [
								fx67llStringList[1]
							],
							startDelay: fx67llStartDelay,
							typeSpeed: fx67llTypeSpeed,
							onComplete: (self) => {
								setTimeout(function() {
									$("#fx67ll-typed-second")
										.next().hide();
									$("#fx67ll-typed-second")
										.append(
											"<br><br><span id='fx67ll-typed-third'></span>"
										);
									let typed_next =
										new Typed(
											'#fx67ll-typed-third', {
												strings: [
													fx67llStringList[2]
												],
												startDelay: fx67llStartDelay,
												typeSpeed: fx67llTypeSpeed,
												onComplete: (
													self
												) => {
													setTimeout
														(function() {
																$("#fx67ll-typed-third")
																	.next()
																	.hide();
																$("#fx67ll-typed-third")
																	.append(
																		"<br><br><span id='fx67ll-typed-fourth'></span>"
																	);
																let typed_next =
																	new Typed(
																		'#fx67ll-typed-fourth', {
																			strings: [
																				fx67llStringList[3]
																			],
																			startDelay: fx67llStartDelay,
																			typeSpeed: fx67llTypeSpeed,
																			onComplete: (
																				self
																			) => {
																				setTimeout
																					(function() {
																							$("#fx67ll-typed-fourth")
																								.next()
																								.hide();
																							$("#fx67ll-typed-fourth")
																								.append(
																									"<br><br><span id='fx67ll-typed-fifth'></span>"
																								);
																							let typed_next =
																								new Typed(
																									'#fx67ll-typed-fifth', {
																										strings: [
																											fx67llStringList[4],
																											fx67llStringList[5],
																										],
																										startDelay: fx67llStartDelay,
																										typeSpeed: fx67llTypeSpeed,
																										backSpeed: 0,
																										backDelay: 1000,
																										onComplete: (
																											self
																										) => {
																											console
																												.log(
																													'Type animation is finished ~~~'
																												);
																											setTimeout
																												(function() {
																														$("#fx67ll-typed-box")
																															.offset({
																																top: -
																																	(
																																		$(
																																			"#fx67ll-typed-box"
																																			)
																																		.height() /
																																		2 -
																																		300
																																	)
																															});
																														$("#fx67ll-typed-box")
																															.html(
																																"Welcome <strong><em>https://fx67ll.com</em></strong> ~"
																															);
																													},
																													4489
																												);
																										},
																									}
																								);
																						},
																						fx67llNextTimeSpace
																					);
																			},
																		}
																	);
															},
															fx67llNextTimeSpace
														);
												},
											});
								}, fx67llNextTimeSpace);
							},
						});
					}, fx67llNextTimeSpace);
				},
			});
		}, fx67llNextTimeSpace);
	},
});
