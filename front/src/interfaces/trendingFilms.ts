import { FilmResult } from "./films";

export interface TrendingFilms { 
    trendingDay: FilmResult[];
    trendingWeek: FilmResult[];
}