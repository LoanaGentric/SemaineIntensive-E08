// console.log("Hello World")

jQuery(function($) {
	let launch = new Date(2018,01,20,00,00);
	let days = $('#days');
	let hours = $('#hours');
	let minutes = $('#minutes');
	let seconds = $('#seconds');

	setDate();
	function setDate() {
		let now = new Date();
		let s = ((launch.getTime() - now.getTime())/1000) - now.getTimezoneOffset()*60;
		let d = Math.floor (s/84600);
		days.html('<strong>' + d + '</strong>Jour' + (d > 1 ? 's':''));
		s -= d * 86400;

		let h = Math.floor(s/3600);
		hours.html('<strong>' + h + '</strong>Heure' + (h > 1 ? 's':''));
		s -= h * 3600;

		let m = Math.floor(s/60);
		minutes.html('<strong>' + m + '</strong>Minute' + (m > 1 ? 's':''));
		s -= m * 60;

		s = Math.floor(s);
		seconds.html('<strong>' + s + '</strong>Seconde' + (s > 1 ? 's':''));

		setTimeout(setDate,1000);
	}
});