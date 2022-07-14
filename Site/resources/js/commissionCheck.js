const checkURL = "https://raw.githubusercontent.com/XetThe/xetThe-web/main/commissions.json";
// const checkURL = "/tests/commissions.json";

setTimeout(check, 200)

function check() {
	
	fetch(checkURL, fetchInit)
	
	.then(response => response.json())
	.then(json => {
		
		if ( json.status == "open") {
			
			document.getElementById('checkText').textContent = json.status + ", " + json.slotsFree + " / " + json.slotsMax + " Slots.";
			document.getElementById('neutral').id = "open"
			
		} else if ( json.status == "closed" ) {
			
			document.getElementById('checkText').textContent = json.status;
			document.getElementById('neutral').id = "closed"
			
		} else {
			
			document.getElementById('checkText').textContent = "Can't Get Status.";
			
		}
		
		console.log(`${json.status},`, `${json.slotsFree}`, "/", `${json.slotsMax}`, "Slots.");
		
	});
	
}