$(document).ready(function() {

	let topics = ["Raiders of the Lost Ark", "Superman", "The Dark Knight", "Star Wars", "Back to the Future", "Saving Private Ryan", "Forrest Gump", "My Cousin Vinny", "Guardians of the Galaxy", "Deadpool"];

	function createButtons() {
		$("#movieButtons").empty();

		for (let i = 0; i < topics.length; i++) {
			let a = $("<button>");
			a.addClass("movie");
			a.attr("data-name", topics[i]);
			a.text(topics[i]);
			$('#movieButtons').append(a);
		};
	};

	createButtons();

	console.log(topics);

	$('#additional').on("click", function(event) {
		event.preventDefault();
		let newMovie = $('#movie-input').val().trim();
		topics.push(newMovie);
		createButtons();
	})

	$('.movie').on("click", function() {

		const movie = $(this).attr('data-name');

		const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=2NwdkF65AzHSShbXLEjOeP70wFT8HCQ6&limit=10";

		$('#movieGifs').empty();

		$.ajax({
			url: queryURL,
			method: "GET",
		})

		.done(function(response) {
			const results = response.data;

			for (let i = 0; i < results.length; i++) {
				if (results[i].rating !== "r") {
					const gifDiv = $('<div class="item">');
					const rating = results[i].rating;
					const p = $('<p>').text("Rating: " + rating);
					const movieImage = $('<img>');
					movieImage.attr("src", results[i].images.fixed_height.url);
					gifDiv.append(p);
					gifDiv.append(movieImage);

					$('#movieGifs').prepend(gifDiv);
				};
			};
		});
	});	
});
