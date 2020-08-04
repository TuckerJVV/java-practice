//Objects and Arrays//
var database = [
	{
		username: "Phil",
		password: "bigdad",
	},
	{
		username: "Baby",
		password: "1234",
	},
	{
		username: "shutthatshitup",
		password: "big789",
	},
];


var newsFeed = [
	{
		username: "Tina",
		timeline: "Whattup BLM bitches"
	},
	{
		username: "Trump",
		timeline: "I love the people"
	},
	{
		username: "Pelosi",
		timeline: "at least I give people money"
	},
];

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
				return true;
			}
		}
		return false;
	}
	

function signIn(username, password) {
		if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username or password");
	}
}
var userNamePrompt = prompt("Whats your username");
var passWordPrompt = prompt("whats your password");
signIn(userNamePrompt, passWordPrompt)