function changeTheme() {

	var theme = document.getElementById('mainCSS');

	if (theme.getAttribute('href') == "/resources/dark.css") {

		createCookie("rememberTheme", "light", 7);
		theme.setAttribute('href', `/resources/light.css`);
		document.getElementById('themeButton').innerHTML = '<i class="fa-solid fa-moon"></i>';
		console.log("Theme Switched to Light")
		
	} else if (theme.getAttribute('href') == "/resources/light.css") {

		createCookie("rememberTheme", "dark", 7);
		theme.setAttribute('href', `/resources/dark.css`);
		document.getElementById('themeButton').innerHTML = '<i class="fa-solid fa-sun"></i>';
		console.log("Theme Switched to Dark")
		
	}
}