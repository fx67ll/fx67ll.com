/*! fx67ll.com application bundle */
! function(t) {
	function e(e) {
		for (var o, a, u = e[0], c = e[1], f = e[2], s = 0, p = []; s < u.length; s++) a = u[s], r[a] && p.push(r[a][
			0
		]), r[a] = 0;
		for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (t[o] = c[o]);
		for (l && l(e); p.length;) p.shift()();
		return i.push.apply(i, f || []), n()
	}

	function n() {
		for (var t, e = 0; e < i.length; e++) {
			for (var n = i[e], o = !0, u = 1; u < n.length; u++) {
				var c = n[u];
				0 !== r[c] && (o = !1)
			}
			o && (i.splice(e--, 1), t = a(a.s = n[0]))
		}
		return t
	}
	var o = {},
		r = {
			2: 0
		},
		i = [];

	function a(e) {
		if (o[e]) return o[e].exports;
		var n = o[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[e].call(n.exports, n, n.exports, a), n.l = !0, n.exports
	}
	a.m = t, a.c = o, a.d = function(t, e, n) {
		a.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: n
		})
	}, a.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, a.t = function(t, e) {
		if (1 & e && (t = a(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (a.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var o in t) a.d(n, o, function(e) {
				return t[e]
			}.bind(null, o));
		return n
	}, a.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return a.d(e, "a", e), e
	}, a.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, a.p = "";
	var u = window.webpackJsonp = window.webpackJsonp || [],
		c = u.push.bind(u);
	u.push = e, u = u.slice();
	for (var f = 0; f < u.length; f++) e(u[f]);
	var l = c,
		d = window.Fx67ll = window.Fx67ll || {},
		m = !1;
	d.animation = {
		start: function(settings) {
			if (m) return;
			m = !0, d.settings = settings || {}, i.push([23, 0]), n()
		}
	}
}({
	23: function(t, e, n) {
		"use strict";
		n.r(e);
		n(14), n(24);
		var o, r, i = n(1),
			a = n(6),
			u = n(10),
			c = n(9),
			f = n(2),
			l = n(11),
			s = n(7),
			p = n(8),
			b = n(4);

		function y(t, e, n) {
			return (y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
				var o = function(t, e) {
					for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = g(t)););
					return t
				}(t, e);
				if (o) {
					var r = Object.getOwnPropertyDescriptor(o, e);
					return r.get ? r.get.call(n) : r.value
				}
			})(t, e, n || t)
		}

		function h(t, e) {
			for (var n = 0; n < e.length; n++) {
				var o = e[n];
				o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0),
					Object.defineProperty(t, o.key, o)
			}
		}

		function d(t, e, n) {
			return e && h(t.prototype, e), n && h(t, n), t
		}

		function O(t) {
			return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol
					.prototype ? "symbol" : typeof t
			})(t)
		}

		function v(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function w(t, e) {
			return !e || "object" !== O(e) && "function" != typeof e ? j(t) : e
		}

		function j(t) {
			if (void 0 === t) throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called");
			return t
		}

		function g(t) {
			return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function m(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError(
				"Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && P(t, e)
		}

		function P(t, e) {
			return (P = Object.setPrototypeOf || function(t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}
		var F = new(o = Object(s.a)({
				x: 8,
				y: 8
			}, .15), Object(p.a)(r = o(r = function(t) {
				function e() {
					return v(this, e), w(this, g(e).apply(this, arguments))
				}
				return m(e, a["a"]), e
			}()) || r) || r),
			M = new(function(t) {
				function e() {
					var t, n;
					v(this, e);
					for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
					return (n = w(this, (t = g(e)).call.apply(t, [this].concat(r)))).t = 0, n.update = n
						.update.bind(j(j(n))), n
				}
				return m(e, u["a"]), d(e, [{
					key: "update",
					value: function() {
						this.t += .05, this.position.y += .0025 * Math.sin(this.t)
					}
				}]), e
				// The bundled Muli geometry font is Latin-only; Chinese is rendered in the DOM.
			}())(window.Fx67ll.settings.sceneText, {
				color: "#0b3d24",
				size: b.a.isMobile ? .6 : .8
			});
		M.position.x -= .5 * M.basePosition, M.position.y += .15;
		var _ = ["#EAFFF2", "#EAFFF2", "#D5F5E3", "#D5F5E3", "#145A32", "#58D68D"].map(function(t) {
				return new i.Color(t)
			}),
			S = {
				nbrOfPoints: 4,
				speed: .03,
				turbulence: new i.Vector3(1, .8, 1),
				orientation: new i.Vector3(1, 0, 0),
				transformLineMethod: function(t) {
					return 3 * (.5 - Math.abs(.5 - t))
				}
			},
			x = b.a.isMobile ? -1.8 : -3.2,
			k = b.a.isMobile ? 3.25 : 5,
			L = b.a.isMobile ? 3.7 : 7,
			T = new(function(t) {
				function e() {
					return v(this, e), w(this, g(e).apply(this, arguments))
				}
				return m(e, c["a"]), d(e, [{
					key: "start",
					value: function() {
						var t = this,
							n = this.frequency;
						this.frequency = 1, setTimeout(function() {
							t.frequency = n
						}, 500), y(g(e.prototype), "start", this).call(this)
					}
				}, {
					key: "addLine",
					value: function() {
						(y(g(e.prototype), "addLine", this).call(this, {
							width: Object(f.a)(.1, .3),
							length: Object(f.a)(k, L),
							visibleLength: Object(f.a)(.05, .8),
							position: new i.Vector3(x, .3, Object(f.a)(-1, 1)),
							color: Object(l.a)(_)
						}).rotation.x = Object(f.a)(0, 2 * Math.PI), Math.random() > .1) &&
						(y(g(e.prototype), "addLine", this).call(this, {
							width: Object(f.a)(.05, .1),
							length: Object(f.a)(5, 10),
							visibleLength: Object(f.a)(.05, .5),
							speed: .05,
							position: new i.Vector3(Object(f.a)(-9, 5), Object(f.a)(
								-5, 5), Object(f.a)(-10, 6)),
							color: Object(l.a)(_)
						}).rotation.x = Object(f.a)(0, 2 * Math.PI))
					}
				}]), e
			}())({
				frequency: .1
			}, S);
		F.add(T), F.start();
		var C = new TimelineLite({
			delay: .2
		});
		C.to(".fx67ll-overlay", .6, {
			opacity: 0
		}), C.fromTo(F.lookAt, 3, {
			y: -4
		}, {
			y: 0,
			ease: Power3.easeOut
		}, 0), C.add(T.start, "-=2.5"), C.add(function() {
			F.add(M), M.show()
		}, "-=1.6"), b.a.onHide(function(t) {
			var e = new TimelineLite;
			e.to(F.lookAt, 2, {
				y: -6,
				ease: Power3.easeInOut
			}), e.add(M.hide, 0), e.add(T.stop), e.to(".fx67ll-overlay", .5, {
				autoAlpha: 1,
				onComplete: t
			}, "-=1.5")
		})
	},
	24: function(t, e, n) {}
});

/*! fx67ll.com application utilities */
(function (global) {
	'use strict';

	var namespace = global.Fx67ll = global.Fx67ll || {};

	function initBrandEasterEgg() {
		var brand = document.querySelector('.fx67ll-identity-title-link');
		var bubble = document.getElementById('fx67ll-brand-bubble');
		var modal = document.getElementById('fx67ll-brand-modal');
		if (!brand || !bubble) return;

		var modalDesc = modal ? document.getElementById('fx67ll-brand-modal-desc') : null;
		var modalUrl = modal ? document.getElementById('fx67ll-brand-modal-url') : null;
		var confirmBtn = modal ? modal.querySelector('.fx67ll-brand-modal-confirm') : null;
		var cancelBtn = modal ? modal.querySelector('.fx67ll-brand-modal-cancel') : null;
		var mask = modal ? modal.querySelector('.fx67ll-brand-modal-mask') : null;

		// 个人作品链接池：来自 nav.fx67ll.com 的 sites-data.js（window.FX_SITES），
		// 过滤规则 —— 排除已停更的博客同步站（description 含「停更」）与友链分组（非个人作品），其余全部保留。
		var pool = [];
		(global.FX_SITES || []).forEach(function (group) {
			if (group.visible === false || group.name === '友链') return;
			(group.site || []).forEach(function (site) {
				if (site.visible === false) return;
				if (site.description && site.description.indexOf('停更') !== -1) return;
				pool.push(site);
			});
		});
		if (!pool.length) return;

		var currentSite = null; // 气泡当前展示的站点，点击跳转时与其保持完全一致
		var pendingSite = null; // 弹窗中等待用户确认跳转的站点
		var restoringFocus = false;
		var lastFocused = null;

		// 随机取一个站点，并尽量避开 exclude（保证「每次展示都不同」）
		function pickSite(exclude) {
			if (pool.length === 1) return pool[0];
			var site = exclude;
			var guard = 0;
			while (site === exclude && guard < 32) {
				site = pool[Math.floor(Math.random() * pool.length)];
				guard++;
			}
			return site;
		}

		function shortenUrl(url) {
			return String(url).replace(/^https?:\/\//, '').replace(/^www\./, '');
		}

		function showBubble() {
			currentSite = pickSite(currentSite);
			bubble.textContent =
				(currentSite.emoji ? currentSite.emoji + ' ' : '') + currentSite.name + ' · ' + shortenUrl(currentSite.url);
			bubble.hidden = false;
		}

		function hideBubble() {
			bubble.hidden = true;
		}

		function openModal() {
			if (!modal || !confirmBtn) {
				// 兜底：确认弹窗结构缺失时退回为直接跳转
				if (currentSite) global.open(currentSite.url, '_blank', 'noopener');
				return;
			}
			pendingSite = currentSite;
			if (modalDesc) {
				modalDesc.textContent = (pendingSite.emoji ? pendingSite.emoji + ' ' : '') + pendingSite.name;
			}
			if (modalUrl) {
				modalUrl.textContent = pendingSite.url;
			}
			lastFocused = document.activeElement;
			modal.hidden = false;
			confirmBtn.focus();
		}

		function closeModal() {
			modal.hidden = true;
			pendingSite = null;
			// 焦点还给打开弹窗前的元素；此处由代码触发的聚焦不应再次弹出气泡
			if (lastFocused && typeof lastFocused.focus === 'function') {
				restoringFocus = true;
				lastFocused.focus();
				restoringFocus = false;
			}
		}

		// 点击品牌文字：直接弹出确认弹窗，确认后跳转的站点与气泡中展示的保持一致；
		// 若气泡尚未展示过任何链接（移动端尚未点按过页面空白处、读屏软件直接激活等），先随机选定一个站点。
		// href 保留 time.fx67ll.com 作为数据源加载失败、本模块未初始化时的兜底跳转
		function onBrandActivate(event) {
			event.preventDefault();
			if (!currentSite) showBubble();
			hideBubble();
			openModal();
		}

		// 判断环境是否支持真正的悬停（鼠标 / 触控板），不支持时启用移动端点按交互
		var hoverCapable = (function () {
			if (global.matchMedia) {
				if (global.matchMedia('(hover: hover)').matches) return true;
				if (global.matchMedia('(hover: none)').matches) return false;
			}
			return !('ontouchstart' in global) && !(navigator.maxTouchPoints > 0);
		})();

		brand.addEventListener('click', onBrandActivate);

		if (hoverCapable) {
			// 悬停 / 键盘聚焦时每次展示一个不同的个人作品链接，移开或失焦后气泡随之消失
			brand.addEventListener('mouseenter', showBubble);
			brand.addEventListener('mouseleave', hideBubble);
			brand.addEventListener('focus', function () {
				if (restoringFocus) return;
				// 气泡已在展示（鼠标正悬停）时保持当前链接不变：
				// 点击品牌文字会先让链接获得焦点并触发 focus，若此处再次换链，
				// 随后触发的 click 弹窗里确认的就是换链后的站点，与悬停展示的不一致
				if (!bubble.hidden) return;
				showBubble();
			});
			brand.addEventListener('blur', hideBubble);
		} else {
			// 移动端等效交互：点按页面空白处展示 / 更换气泡中的个人作品链接（等效桌面悬停），
			// 点按品牌文字本身则直接弹出确认弹窗（等效桌面点击）
			var tapSeenByTouchStart = false;
			var tapDebounceTimer = null;

			// 同一时间窗口内的多次点按只执行最后一次（尾随防抖），避免气泡中的链接被连续切换多次
			function onOutsideTap(event) {
				if (tapDebounceTimer) clearTimeout(tapDebounceTimer);
				if (modal && !modal.hidden) return; // 弹窗打开时页面被遮罩覆盖，此时点按只用于关闭弹窗
				if (brand.contains(event.target)) return;
				if (modal && modal.contains(event.target)) return;
				tapDebounceTimer = setTimeout(function () {
					tapDebounceTimer = null;
					showBubble();
				}, 250);
			}

			document.addEventListener('touchstart', function (event) {
				tapSeenByTouchStart = true;
				onOutsideTap(event);
				setTimeout(function () {
					tapSeenByTouchStart = false;
				}, 500);
			});
			// 同一次点按既触发 touchstart 又触发 click 时只处理一次，避免气泡中的链接被连续刷新两次
			document.addEventListener('click', function (event) {
				if (tapSeenByTouchStart) return;
				onOutsideTap(event);
			});
		}

		if (modal) {
			if (confirmBtn) {
				confirmBtn.addEventListener('click', function () {
					var site = pendingSite;
					closeModal();
					if (!site) return;
					console.log('Brand easter egg -> ' + site.name + ': ' + site.url);
					global.open(site.url, '_blank', 'noopener');
				});
			}
			if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
			if (mask) mask.addEventListener('click', closeModal);
			document.addEventListener('keydown', function (event) {
				if (modal.hidden) return;
				if (event.key === 'Escape' || event.keyCode === 27) closeModal();
			});
		}
	}

	// 旧版主页传承下来的随机文案池（完整清单见 initFaithCopy 内的 copyList）
	function initFaithCopy() {
		var faith = document.getElementById('fx67ll-faith');
		if (!faith) return;

		// 与品牌彩蛋一致的环境判断：文案仅在支持真正悬停的桌面端展示与启用；
		// 移动端的点按交互已被品牌气泡（随机换链）占用，两者无法共存，故移动端不展示也不启用
		var hoverCapable = (function () {
			if (global.matchMedia) {
				if (global.matchMedia('(hover: hover)').matches) return true;
				if (global.matchMedia('(hover: none)').matches) return false;
			}
			return !('ontouchstart' in global) && !(navigator.maxTouchPoints > 0);
		})();
		if (!hoverCapable) {
			faith.hidden = true;
			return;
		}

		var brand = document.querySelector('.fx67ll-identity-title-link');

		// 旧版主页传承下来的随机文案池：完整历史文案（2018~2022），
		// 原始记录见 fx67llBlog/2026/2026-08/2018-fx67ll.md，多行条目已合并为一行
		var copyList = [
			'"Success is not final, Failure is not fatal. It is the courage to continue that counts." -- Winston Churchill',
			'This Year 🎐 / Code more 💻 / Save money 💰 / Keep fit 🏊 / Love NanNan 💖',
			'种一棵树最好的时间是十年前，其次是现在 🌳',
			'If today were the last day of my life, would I want to do what I am about to do today? 🔥',
			'无限大な梦の後の何も无い世の中じゃ 🌱',
			'山有木兮卿有意，昨夜星辰恰似你 ✨',
			'好看的皮囊千篇一律，有趣的灵魂百里挑一 👻',
			'2022的新年计划已经失败，接下来只有更加努力，没有退路 👊',
			'Code more 💻 / Keep fit 🏊 / Save money 💰 / Stay with family 💖',
			'GoodBye 2021 👻　HelloWorld 2022 👾',
			'2022 Happy New Year 🎉🎉🎉',
			'A very very very important year for me 🔥　Never give up and keep going 💪',
			'在这小小的宇宙里遇见你 🥰',
			'生活中从不缺少美，而是缺少一双发现美的眼睛',
			'PC426 | 学会思考，停止盲从',
			'2021夏日限定 :)',
			'意大利是冠军！！！',
			"select * from world where 'someone' like '%you%'",
			'2021冬日限定 :)',
			'生活是不完美的，成长就是认识并接受这件事',
			'🙂😃😆😍😔😵‍💫🤡😥😢😭💀🥴',
			'当你感受不到自我价值时，你的内心会有一种空空洞洞的感觉，你会感到匮乏、自卑，只想拿外在的价值来填满这个洞，你会利用别人对你的肯定和赞赏来达到这个目的，你会以虚假的价值来填补这个洞。',
			'我们带着一身的坑洞四处奔忙，却往往无法察觉到它们。我们通常只能意识到自己的欲望，我想要赞美、我想要成功、我想要这个人的爱、我想要这种或那种经验。欲望与需求一出现，便暗示着坑洞已经冒出来了…',
			'当你和某人建立起亲密的关系时，你就会用那个人来填补你的洞，一旦那个人死亡或是关系结束了，你不会感觉失去了那个人，你感受到的是填补坑洞的东西不见了，感觉丧失了自己的一部分，因为以前被他填满的洞现在又暴露出来了，这就是你会那么痛苦的原因。 -- 阿玛斯《内在的探索》',
			'努力想得到什么东西，其实只要沉着镇静、实事求是，就可以轻易地、神不知鬼不觉地达到目的。而如果过于使劲，闹得太凶，太幼稚，太没有经验，就哭啊，抓啊，拉啊，像一个小孩扯桌布，结果却是一无所获。只不过把桌上的好东西都扯到地上，永远也得不到了。 -- 卡夫卡《城堡》',
			'世界上最稳定的关系是没有关系'
		];
		var FADE_DURATION = 420; // 与 CSS 中 .fx67ll-faith 的 transition 时长保持一致
		var ROTATE_INTERVAL = 8000;

		var currentIndex = -1;
		var switching = false;
		var rotateTimer = null;

		var reduceMotion = global.matchMedia &&
			global.matchMedia('(prefers-reduced-motion: reduce)').matches;

		// 随机取一句，并保证不与当前展示的重复
		function pickIndex(exclude) {
			if (copyList.length === 1) return 0;
			var index = exclude;
			var guard = 0;
			while (index === exclude && guard < 32) {
				index = Math.floor(Math.random() * copyList.length);
				guard++;
			}
			return index;
		}

		function switchFaith() {
			if (switching) return;
			switching = true;
			var next = pickIndex(currentIndex);
			var fadeDelay = reduceMotion ? 0 : FADE_DURATION;
			faith.classList.add('fx67ll-faith-fading');
			setTimeout(function () {
				currentIndex = next;
				faith.textContent = copyList[currentIndex];
				// 书籍摘录等长文案切换为小号样式，避免占据过多画面
				faith.classList.toggle('fx67ll-faith-long',
					copyList[currentIndex].length > 40);
				faith.classList.remove('fx67ll-faith-fading');
				switching = false;
			}, fadeDelay);
		}

		// 首次展示：入场动画结束后再落定终态，避免后续切换时 reveal 动画被重复触发
		currentIndex = pickIndex(currentIndex);
		faith.textContent = copyList[currentIndex];
		faith.classList.toggle('fx67ll-faith-long', copyList[currentIndex].length > 40);
		faith.addEventListener('animationend', function () {
			faith.classList.add('fx67ll-faith-shown');
		}, { once: true });

		// 桌面端交互：点击「梵心临岚 凡溪聆林」以外的任意区域立即随机切换，并重置轮换计时；
		// 文案本身也属于「以外的区域」，键盘聚焦后回车触发的 click 同样会冒泡到此处
		document.addEventListener('click', function (event) {
			if (brand.contains(event.target)) return;
			switchFaith();
			scheduleRotate();
		});

		// 定时自动轮换；偏好减弱动效时只保留点击切换，页面不可见时暂停
		function scheduleRotate() {
			if (rotateTimer) clearInterval(rotateTimer);
			if (reduceMotion) return;
			rotateTimer = setInterval(function () {
				if (document.hidden || switching) return;
				switchFaith();
			}, ROTATE_INTERVAL);
		}
		scheduleRotate();
	}

	// 控制台彩蛋：欢迎偶然打开 DevTools 的技术同好，并顺带安利简历站点 resume.fx67ll.com
	function initConsoleEasterEgg() {
		if (!global.console || typeof global.console.log !== 'function') return;
		var resumeUrl = 'https://resume.fx67ll.com';
		console.log(
			'%cfx67ll.com%c梵心临岚 凡溪聆林',
			'padding:2px 8px;border-radius:6px 0 0 6px;background:#145a32;color:#eafff2;',
			'padding:2px 8px;border-radius:0 6px 6px 0;background:#58d68d;color:#145a32;'
		);
		console.log(
			'%c🥚 隐藏彩蛋：你打开了控制台，看来你也是技术大牛！\n这是我的简历，欢迎互相交流深入了解 👉 ' + resumeUrl,
			'color:#1e8449;font-size:12px;line-height:1.8;'
		);
	}

	function initSite(options) {
		var settings = options || {};
		var yearElement = document.querySelector(settings.yearSelector);

		if (yearElement) {
			yearElement.textContent = new Date().getFullYear();
		}

		initBrandEasterEgg();
		initConsoleEasterEgg();
		initFaithCopy();

		if (namespace.animation) {
			namespace.animation.start(settings);
		}
	}

	namespace.site = {
		init: initSite
	};
})(window);
