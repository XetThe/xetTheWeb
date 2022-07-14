function copyText() {
	navigator.clipboard.writeText("Xet#3939");

	document.getElementsByClassName('tooltip')[0].textContent = "Copied";

	console.log("Text Copied");
}

function resetText() {
	document.getElementsByClassName('tooltip')[0].textContent = "Copy to Clipboard."
}