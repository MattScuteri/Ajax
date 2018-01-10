$(document).ready(function() {

	let topics = ["Raiders of the Lost Ark", "Superman", "The Dark Knight", "Star Wars", "Back to the Future", "Saving Private Ryan", "Forrest Gump", "My Cousin Vinny", "Guardians of the Galaxy", "Deadpool"];

	function createButtons() {
		$("#movieButtons").empty();

		for (let i = 0; i < topics.length; i++) {
			let a = $("<button>");
			a.addClass("movie");
			a.addClass("btn btn-info");
			a.attr("data-name", topics[i]);
			a.attr("src", "images.fixed_width_still.url");

			a.text(topics[i]);
			a.css({"margin": "10px"});
			$('#movieButtons').append(a);
		};
	};

	createButtons();

	$(document.body).on('click', '.movie-image', function() {

		const state = $(this).attr("data-state")
		console.log(state);
		if (state === "still") {
			$(this).attr("src", $(this).attr("data-animate"));
			$(this).attr("data-state", "animate");
		} else {
			$(this).attr("src", $(this).attr("data-still"));
			$(this).attr("data-state", "still");
		}
	})

	$('#additional').on("click", function(event) {
		event.preventDefault();
		let newMovie = $('#movie-input').val().trim();
		topics.push(newMovie);
		createButtons();
	})
	
	$(document.body).on('click', '.movie', function() {

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
					movieImage.addClass('movie-image');
					movieImage.attr('id', 'movie-image-'+i);
					movieImage.attr("src", results[i].images.fixed_height_still.url);
					movieImage.attr("data-still", results[i].images.fixed_height_still.url);
					movieImage.attr("data-animate", results[i].images.fixed_height.url);
					movieImage.attr("data-state", "still");
					gifDiv.append(p);
					gifDiv.append(movieImage);

					$('#movieGifs').prepend(gifDiv);
				};
			};


		});
	});	
});
