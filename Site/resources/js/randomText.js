var randomText = [
    "...",
    "",
    "[Insert Error Message]",
    "{RandomText}",
    "Are you just trying to see how many messages there are?",
    "aughhhhh",
    "Doesn't Exist",
    "Failed to load resource.",
    "For rent!",
    "Go do something else.",
    "Hol' up.",
    "I'm just as dissapointed as you are.",
    "If you noclip out of the website...",
    "Impossible.",
    "Is anyone there?",
    "just... 404.",
    "Kinda boring.",
    "Not Found",
    "Not what you expected, huh?",
    "Nothing but void and random messages.",
    "oo-ee-oo",
    "Spamming F5 probably won't work",
    "That's an error.",
    "That's not good...",
    "There are 39 random messages, by the way.",
    "There are other pages... just saying...",
    "This is not working",
    "To be continued...",
    "Too good for this website.",
    "Try again?",
    "Try cehking for typos... wait",
    "Waiting for something to happen",
    "What are you up to?",
    "When you don't see it",
    "Wrong Address",
    "You can always click 'Home' to go back.",
    "You may want to turn back...",
    "You picked the wrong page, fool!",
    "zzz",
]

console.log("Loaded", `${randomText.length}`, "404 Messages");

var random = Math.floor(Math.random() * randomText.length);

document.getElementsByTagName('h2')[0].textContent = randomText[random];

if ( Math.random() > 0.95 ) {
    document.getElementsByTagName('h1')[0].textContent = "727";
    document.getElementsByTagName('h2')[0].textContent = "When you see it!"
}
