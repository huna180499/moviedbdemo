// export const trending = [
//     {
//         title:"Today",
//         listFilm: []
//     },
//     {
//         title:"This Week",
//         listFilm:[]
//     }
// ]
// export const popular = [
//     {
//         title:"Popular",
//         listFilm:[]
//     }
// ]
// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWRkY2ZmYzFjOWVjMzlhZGViOWUzYjdjYWY1NDk3OCIsInN1YiI6IjY1NzgzZWE5MzVhNjFlMDBjNjM0ODc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-kztLOkl9xvWdkvVbham2OvAza4TtAVFTweRrB4tkYc'
//     }
//   };
// fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
//   .then(response => response.json())
//   .then(response => trending[0].listFilm = response.results)
//   .catch(err => console.error(err));
// fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
//   .then(response => response.json())
//   .then(response => trending[1].listFilm = response.results)
//   .catch(err => console.error(err));

// fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
//   .then(response => response.json())
//   .then(response => popular[0].listFilm = response.results)
//   .catch(err => console.error(err));
const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
   
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow để thông báo lỗi cho thành phần sử dụng API
  }
};
const OPT = {
  method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWRkY2ZmYzFjOWVjMzlhZGViOWUzYjdjYWY1NDk3OCIsInN1YiI6IjY1NzgzZWE5MzVhNjFlMDBjNjM0ODc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-kztLOkl9xvWdkvVbham2OvAza4TtAVFTweRrB4tkYc'
    }
}
export const fetchTrendingToday = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  const options = OPT;
  return await fetchData(url, options);
}
export const fetchTrendingThisWeek = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
  const options = OPT;
  return await fetchData(url, options);
}
export const fetchTopRatedMovies = async () => {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const options = OPT;
  return await fetchData(url, options);

}