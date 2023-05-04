export interface Film {
  page: number;
  results: FilmResult[];
  total_results: number;
  total_pages: number;
}

export interface FilmResult {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  genres: FilmsGenres[]; 
  original_name: string;
  first_air_date: string;
}

interface FilmsGenres { 
  id: number; 
  name: string; 
}
