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

var userNamePrompt = prompt("Whats your username");
var passWordPrompt = prompt("whats your password");

function signIn(username, password) {
	for (var i=0, i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			console.log(newsfeed);
	} else {
		alert("sorry wrong username");
		}
	}

	if (username === database[0].username &&
		password === database[0].password) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username or password");
	}
}

signIn(userNamePrompt, passWordPrompt);