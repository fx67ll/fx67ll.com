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
				showBubble();
			});
			brand.addEventListener('blur', hideBubble);
		} else {
			// 移动端等效交互：点按页面空白处展示 / 更换气泡中的个人作品链接（等效桌面悬停），
			// 点按品牌文字本身则直接弹出确认弹窗（等效桌面点击）
			var tapSeenByTouchStart = false;

			function onOutsideTap(event) {
				if (modal && !modal.hidden) return; // 弹窗打开时页面被遮罩覆盖，此时点按只用于关闭弹窗
				if (brand.contains(event.target)) return;
				if (modal && modal.contains(event.target)) return;
				showBubble();
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

		if (namespace.animation) {
			namespace.animation.start(settings);
		}
	}

	namespace.site = {
		init: initSite
	};
})(window);
