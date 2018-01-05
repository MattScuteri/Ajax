$(document).ready(function() {

	let movieArray = ["Raiders of the Lost Ark", "Superman", "The Dark Knight", "Star Wars", "Back to the Future", "Saving Private Ryan", "Forrest Gump", "My Cousin Vinny", "Guardians of the Galaxy", "Deadpool"];

	for (let i = 0; i < movieArray.length; i++) {
		$('#movieButtons').append('<button id="movie">' + movieArray[i] + '</button>');
		$('#movie').html(movieArray[i]);
		$('#movie').attr(movieArray[i]);
	};

	$('button').on("click" function() {

		const movie = $(this).attr(movieArray[i]);

		const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "2NwdkF65AzHSShbXLEjOeP70wFT8HCQ6";

		$.ajax({
			url: queryURL,
			method: "GET",
		});

		.done(function(response) {
			const results = response.data;

			for (let i = 0; i < results.length; i++) {
				if (results[i].rating !== "g" && results[i].rating !== "pg") {
					const gifDiv = $('<div class="item">');
					const rating = rating[i].rating;
					const p = $('<p>').text("Rating: " + rating);
					const movieImage = $('<img>');
					movieImage.attr("src", results[i].images.fixed_height.url);
					gifDiv.append(p);
					gifDiv.append(personImage);

					$('#movieGifs').prepend(gifDiv);
				};
			};
		});
	});	
});
