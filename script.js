$(document).ready(function() {

	let movieArray = ["Raiders of the Lost Ark", "Superman", "The Dark Knight", "Star Wars", "Back to the Future", "Saving Private Ryan", "Forrest Gump", "My Cousin Vinny", "Guardians of the Galaxy", "Deadpool"];

	for (let i = 0; i < movieArray.length; i++) {
		$('<button>').append(movieArray[i]);
	}

	// const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 2NwdkF65AzHSShbXLEjOeP70wFT8HCQ6";

});
