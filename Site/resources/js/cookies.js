// So uh, basically, this is the piece of code that takes care of baking those cookies.

function createCookie(name, value, dies) {
	const date = new Date();
	date.setTime(date.getTime() + (dies*1000*60*60*24));
	let expires = "expires=" + date.toUTCString();
	document.cookie = name + "=" + value + ";" + expires + "; path=/"
}


// And this one right here, is the one that gets to eat all those cookies, but never shares them, so selfish...

function getCookie(name) {
	let cookie = name + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let cookieNom = decodedCookie.split(';');

	for( let i = 0; i < cookieNom.length; i++ ) {

		let c = cookieNom[i];

		while (c.charAt(0) == ' ') {

			c = c.substring(1);

		}

		if (c.indexOf(name) == 0 ) {

			return c.substring(name.length, c.length);

		}
	}
	return "";
}

//Dark Mode Cookie

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	createCookie("theme", "dark", 7);

} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
	createCookie("theme", "light", 7);

}

if (getCookie("theme") == "=dark" && getCookie("rememberTheme" == "=")) {
	console.log("OS is in Dark Mode");

	document.getElementById("mainCSS").setAttribute('href', "/resources/dark.css");

} else if (getCookie("theme") == "=light" && getCookie("rememberTheme" == "=")) {
	console.log("OS is in Light Mode");

	document.getElementById("mainCSS").setAttribute('href', "/resources/light.css");
	document.getElementById('themeButton').innerHTML = '<i class="fa-solid fa-moon"></i>';
}

if (getCookie("rememberTheme") == "=") {
	console.log("Default theme has not been set yet, using OS theme");

} else if (getCookie("rememberTheme") == "=light") {
	console.log("you willingly chose light theme...")

	document.getElementById("mainCSS").setAttribute('href', "/resources/light.css");
	document.getElementById('themeButton').innerHTML = '<i class="fa-solid fa-moon"></i>';

} else if (getCookie("rememberTheme") == "=dark") {
	console.log("you willingly chose dark theme...")

	document.getElementById("mainCSS").setAttribute('href', "/resources/dark.css");
	document.getElementById('themeButton').innerHTML = '<i class="fa-solid fa-sun"></i>';

}

//Disclaimer Cookie 

if (getCookie("disclaimerDismissed") == "=true") {
	document.getElementById('undismissed').parentNode.removeChild(document.getElementById('undismissed'));
	console.log("The Cookies Disclaimer was dismissed previously.");
}