export const checkMovieImage = (path, baseUrl) => {
	return path
		? `${baseUrl}${path}`
		: '/movie_placeholder.png';
};
