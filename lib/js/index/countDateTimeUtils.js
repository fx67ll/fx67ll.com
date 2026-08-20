function startCountdown() {
	// 目标时间：2022年10月9日9点0分0秒（月份从0开始计算，所以9代表十月）
	const targetDate = new Date(2022, 9, 9, 9, 0, 0);
	let intervalId; // 存储定时器ID以便清理

	function updateTimer() {
		const now = new Date();
		// 计算时间差的绝对值
		const diffMs = Math.abs(now - targetDate);
		const totalSeconds = Math.floor(diffMs / 1000);

		// 分解时间差
		const days = Math.floor(totalSeconds / 86400);
		const hours = Math.floor((totalSeconds % 86400) / 3600);
		const minutes = Math.floor((totalSeconds % 3600) / 60);
		const seconds = totalSeconds % 60;

		// 格式化数字为两位数
		const format = num => num.toString().padStart(2, '0');
		const str = `${days}天${format(hours)}时${format(minutes)}分${format(seconds)}秒`;

		// 更新到页面
		document.getElementById("workYear").innerHTML = str;
	}

	// 立即执行一次并启动定时器
	updateTimer();
	intervalId = setInterval(updateTimer, 1000);
	
	// 页面卸载时清除定时器
	window.addEventListener('beforeunload', () => {
	    clearInterval(intervalId);
	});
}

// 页面加载后启动
window.addEventListener('load', startCountdown);