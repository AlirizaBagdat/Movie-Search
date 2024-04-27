export const fetchMovies = async (query) => {
  const apiKey = '1cece4418167d7edc50a16dc5aef363a';
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await response.json();
  return data.results;
};