/*! fx67ll.com application utilities */
(function (global) {
	'use strict';

	var namespace = global.Fx67ll = global.Fx67ll || {};

	function getElement(selector) {
		return typeof selector === 'string' ? document.querySelector(selector) : selector;
	}

	function collectTypingStages(messagesElement) {
		var messages = Array.prototype.slice.call(
			messagesElement.querySelectorAll('[data-typed-message]')
		);

		return messages.reduce(function (stages, message, index) {
			var group = message.getAttribute('data-typed-group') || 'message-' + index;
			var previousStage = stages[stages.length - 1];
			var value = message.innerHTML.trim();

			if (previousStage && previousStage.group === group) {
				previousStage.strings.push(value);
			} else {
				stages.push({
					group: group,
					strings: [value]
				});
			}

			return stages;
		}, []);
	}

	function appendTypingLine(outputElement, index) {
		if (index > 0) {
			outputElement.appendChild(document.createElement('br'));
			outputElement.appendChild(document.createElement('br'));
		}

		var line = document.createElement('span');
		line.id = 'fx67ll-typed-line-' + index;
		outputElement.appendChild(line);
		return line;
	}

	function removeTypingCursor(instance) {
		if (instance && instance.cursor && instance.cursor.parentNode) {
			instance.cursor.parentNode.removeChild(instance.cursor);
		}
	}

	function renderTypingStatic(outputElement, stages) {
		outputElement.innerHTML = '';

		stages.forEach(function (stage, index) {
			appendTypingLine(outputElement, index).innerHTML =
				stage.strings[stage.strings.length - 1];
		});
	}

	function fitTypingContainer(containerElement) {
		var boxHeight;
		var screenHeight;

		if (global.jQuery) {
			boxHeight = global.jQuery(containerElement).height();
			screenHeight = global.jQuery(document.body).height();
		} else {
			boxHeight = containerElement.offsetHeight;
			screenHeight = document.body.offsetHeight;
		}

		if (boxHeight > screenHeight) {
			var top = -(boxHeight - screenHeight) - 100;
			if (global.jQuery) {
				global.jQuery(containerElement).offset({
					top: top
				});
			} else {
				containerElement.style.top = top + 'px';
			}
		}
	}

	function startTyping(options) {
		var settings = Object.assign({
			typeSpeed: 28,
			startDelay: 188,
			stageDelay: 888,
			easterEggDelay: 4498
		}, options);
		var containerElement = getElement(settings.containerSelector);
		var outputElement = getElement(settings.outputSelector);
		var messagesElement = getElement(settings.messagesSelector);

		if (!containerElement || !outputElement || !messagesElement) {
			return {
				stop: function () {}
			};
		}

		var stages = collectTypingStages(messagesElement);
		var timers = [];
		var instances = [];
		var stopped = false;
		var resizeObserver;

		function schedule(callback, delay) {
			var timer = global.setTimeout(callback, delay);
			timers.push(timer);
		}

		function showEasterEgg() {
			if (stopped || !settings.easterEggHtml) {
				return;
			}

			console.log('Find some eggs !!!');
			var top = -(containerElement.offsetHeight / 2 - global.innerHeight / 2);
			if (global.jQuery) {
				global.jQuery(containerElement).offset({
					top: top
				});
			} else {
				containerElement.style.top = top + 'px';
			}
			containerElement.innerHTML = settings.easterEggHtml;

			var link = containerElement.querySelector('.fx67ll-a');
			if (link && settings.easterEggUrl) {
				link.addEventListener('click', function (event) {
					event.stopPropagation();
					global.open(settings.easterEggUrl);
				});
			}
		}

		function finish() {
			if (settings.easterEggDelay >= 0) {
				schedule(showEasterEgg, settings.easterEggDelay);
			}
		}

		function typeStage(index) {
			if (stopped || index >= stages.length) {
				finish();
				return;
			}

			var line = appendTypingLine(outputElement, index);
			var instance = new global.Typed('#' + line.id, {
				strings: stages[index].strings,
				typeSpeed: settings.typeSpeed,
				startDelay: settings.startDelay,
				backSpeed: 0,
				backDelay: 1000,
				contentType: 'html',
				onComplete: function (self) {
					removeTypingCursor(self);
					fitTypingContainer(containerElement);

					if (index + 1 < stages.length) {
						schedule(function () {
							typeStage(index + 1);
						}, settings.stageDelay);
					} else {
						console.log('Type animation is finished ~~~');
						finish();
					}
				}
			});
			instances.push(instance);
		}

		if (global.jQuery && global.jQuery.fn.resize) {
			global.jQuery(containerElement).resize(function () {
				fitTypingContainer(containerElement);
			});
		} else if ('ResizeObserver' in global) {
			resizeObserver = new global.ResizeObserver(function () {
				fitTypingContainer(containerElement);
			});
			resizeObserver.observe(containerElement);
		}

		var reduceMotion = global.matchMedia &&
			global.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (reduceMotion || typeof global.Typed !== 'function') {
			renderTypingStatic(outputElement, stages);
			fitTypingContainer(containerElement);
			finish();
		} else {
			outputElement.innerHTML = '';
			typeStage(0);
		}

		return {
			stop: function () {
				stopped = true;
				timers.forEach(global.clearTimeout);
				instances.forEach(function (instance) {
					instance.destroy();
				});
				if (resizeObserver) {
					resizeObserver.disconnect();
				}
			}
		};
	}

	function bindRoute(selector, url, message) {
		var elements = document.querySelectorAll(selector);

		Array.prototype.forEach.call(elements, function (element) {
			element.addEventListener('click', function (event) {
				event.stopPropagation();
				if (message) {
					console.log(message);
				}
				if (url) {
					global.open(url);
				}
			});
		});
	}

	function initSite(options) {
		var settings = options || {};
		var yearElement = document.querySelector(settings.yearSelector);

		if (yearElement) {
			yearElement.innerHTML = new Date().getFullYear();
		}

		bindRoute('.fx67ll-xyz', 'https://fx67ll.xyz');
		bindRoute('.fx67ll-vue-ui', 'https://vue-ui.fx67ll.com');
		bindRoute('.fx67ll-map', 'https://map.fx67ll.com');
		bindRoute('.fx67ll-uni', 'https://uni.fx67ll.com');
		bindRoute('.fx67ll-three', 'https://three.fx67ll.com');
		bindRoute('.fx67ll-node', 'https://node.fx67ll.com');
		bindRoute('.fx67ll-java', 'https://vip.fx67ll.com');
		bindRoute('.fx67ll-jenkins', 'https://run.fx67ll.com/jenkins');
		bindRoute('#fx67ll-nan', 'https://love.fx67ll.com', 'I love u three thousand times！！！');
		bindRoute('#fx67ll-tree', 'https://fx67ll.xyz', 'This is my tree —— https://fx67ll.xyz');
		bindRoute('#fx67ll-steve', null, 'Steve Jobs !!!');
		bindRoute('#fx67ll-dream', null, 'Never Give Up !!!');
		bindRoute('#fx67ll-pc426', 'https://www.pc426.com');

		console.log(
			"####### #     #  #####  ####### #       #     \n" +
			"#        #   #  #     # #    #  #       #       \n" +
			"#         # #   #           #   #       #       \n" +
			"#####      #    ######     #    #       #       \n" +
			"#         # #   #     #   #     #       #\n" +
			"#        #   #  #     #   #     #       #\n" +
			"#       #     #  #####    #     ####### ####### "
		);
		console.log('keep running!');
		console.log('https://fx67ll.xyz');

		if (settings.lastUpdated) {
			console.log('Last updated: ' + settings.lastUpdated);
		}
	}

	function formatDuration(milliseconds, labels) {
		var totalSeconds = Math.floor(Math.abs(milliseconds) / 1000);
		var days = Math.floor(totalSeconds / 86400);
		var hours = Math.floor((totalSeconds % 86400) / 3600);
		var minutes = Math.floor((totalSeconds % 3600) / 60);
		var seconds = totalSeconds % 60;
		var units = labels || {};

		function pad(value) {
			return String(value).padStart(2, '0');
		}

		return [
			days,
			units.days || '',
			pad(hours),
			units.hours || '',
			pad(minutes),
			units.minutes || '',
			pad(seconds),
			units.seconds || ''
		].join('');
	}

	function startCountdown(options) {
		var settings = options || {};
		var startTime = new Date(settings.since).getTime();

		if (!settings.selector || Number.isNaN(startTime)) {
			return {
				stop: function () {}
			};
		}

		function update() {
			var value = formatDuration(Date.now() - startTime, settings.labels);
			var targets = document.querySelectorAll(settings.selector);

			Array.prototype.forEach.call(targets, function (target) {
				target.innerHTML = value;
			});
		}

		update();
		var interval = global.setInterval(update, 1000);

		return {
			stop: function () {
				global.clearInterval(interval);
			}
		};
	}

	namespace.typing = {
		collectStages: collectTypingStages,
		renderStatic: renderTypingStatic,
		start: startTyping
	};

	namespace.site = {
		init: initSite
	};

	namespace.countdown = {
		formatDuration: formatDuration,
		start: startCountdown
	};
})(window);
