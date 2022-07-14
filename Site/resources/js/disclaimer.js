function disclaimerDismissed(name) {
	console.log(name + " Disclaimer Dismissed.");
	createCookie("disclaimerDismissed", "true", 365);
	document.getElementById("undismissed").id = "dismissed";

	setTimeout(deleteDisclaimer, 1200);

}

function deleteDisclaimer() {
	document.getElementById('dismissed').parentNode.removeChild(document.getElementById('dismissed'));
}