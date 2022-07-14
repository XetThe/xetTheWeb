const listURL = "https://raw.githubusercontent.com/XetThe/xetThe-web/main/commissionsList.json";
// const checkURL = "/tests/commissionsList.json";

const fetchInit = {
	method: 'GET',
	mode: 'cors',
	cache: 'no-cache'
}

fetch(listURL, fetchInit)

.then(Response => Response.json())
.then(json => {

	function createHeader(title) {
		const header = document.createElement('h1');
		header.innerText = (title);
		document.getElementsByClassName('prices')[0].appendChild(header);
	}

	function getItems(category) {
		
		const item = document.createElement('div');

		item.classList.add ("item");
		item.innerHTML =
		`<div>
			<h2>${category[loop].title}</h2>
			<p>${category[loop].description}</p>
		</div>
		
		<p class="priceTag">$${category[loop].price}</p>`;

		console.log(category[loop].title);

		document.getElementsByClassName('prices')[0].appendChild(item);

	}

	createHeader("osu!")

	for (loop = 0; loop < json.osu.length; loop++) {
		getItems(json.osu);
		};

	createHeader("osu! tourmanents");

	for (loop = 0; loop < json.tourney.length; loop++) {
		getItems(json.tourney);
		};

	createHeader("Twitch");

	for (loop = 0; loop < json.twitch.length; loop++) {
		getItems(json.twitch);
		};
	}

);