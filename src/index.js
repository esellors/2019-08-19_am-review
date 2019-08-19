document.getElementById('addFlick').addEventListener('click', addFlick);

let movies = [];

class Movie {
	constructor(title, genre, plot) {
		this.title = title;
		this.genre = genre;
		this.plot = plot;
	}
}

function addFlick(e) {
	e.preventDefault();

	let movieLibrary = document.getElementById('movie_library');

	while (movieLibrary.firstChild) {
		movieLibrary.removeChild(movieLibrary.firstChild);
	}

	const title = document.getElementById('title_input').value;
	const genre = document.getElementById('genre_input').value;
	const plot = document.getElementById('plot_input').value;

	const movie = new Movie(title, genre, plot);
	movies.push(movie);

	movies.forEach(movie => {
		const movieBox = document.createElement('div');
		movieBox.classList.add('movie_info');

		const titleElement = document.createElement('h2');
		const genreElement = document.createElement('h4');
		const plotElement = document.createElement('h4');

		const titleText = document.createTextNode(movie.title);
		const genreText = document.createTextNode(movie.genre);
		const plotText = document.createTextNode(movie.plot);

		titleElement.appendChild(titleText);
		genreElement.appendChild(genreText);
		plotElement.appendChild(plotText);

		movieBox.appendChild(titleElement);
		movieBox.appendChild(genreElement);
		movieBox.appendChild(plotElement);

		movieLibrary.appendChild(movieBox);
	});
}
