import { FC, useState } from "react"
import Image from "next/image";
import { FilmResult } from "@/interfaces";
import { useRouter } from "next/router";

interface TrendingListsProps {
  trendingMoviesDay: FilmResult[];
  trendingMoviesWeek: FilmResult[];
}

interface TredingState {
  isDay: boolean;
  isWeek: boolean;
}

export const TrendingLists:FC<TrendingListsProps> = ({ trendingMoviesDay, trendingMoviesWeek }) => {

  const [ trending, setTrending ] = useState<TredingState>({
    isDay: true,
    isWeek: false
  }); 


  const router = useRouter(); 

  const navigate = (id:number) => {
    router.push(`/film/${id}`);
  }
  
  return (
    <div className="flex flex-col mt-16 w-full">
      <div className="flex gap-5 justify-center">
        <button onClick={() => setTrending({ isDay: true, isWeek: false })} className={`text-slate-50 font-semibold ${trending.isDay ? 'border-b-2 border-yellow-400' : ''}`}>Trending Today</button>
        <button onClick={() => setTrending({ isDay: false, isWeek: true })} className={`text-slate-50 font-semibold ${trending.isWeek ? 'border-b-2 border-yellow-400' : ''}`}>Trending This Week</button>
      </div>
      <div className="flex flex-col gap-2 ml-14 mt-4">
        {trending.isDay && trendingMoviesDay.map((film) => (
          <div 
            className="flex cursor-pointer gap-2 items-center hover:opacity-80 transition duration-300 ease-in-out"
            key={film.id}
            onClick={() => navigate(film.id)}
          >
            <Image
              className="rounded-md"
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.title || film.original_name}
              width={150}
              height={300}
            />
            <div className="ml-2">
              <h3 className="text-slate-50 font-semibold w-[140px]">{film.title || film.original_name}</h3>
              <p className="text-yellow-400 font-light mt-2">{ film.vote_average.toFixed(1) }/10</p>
              <p className="text-lime-50 mt-2 font-semibold">{ film.release_date || film.first_air_date }</p>
            </div>
          </div>
        ))}
        {trending.isWeek && trendingMoviesWeek.map((film) => (
          <div 
            className="flex cursor-pointer gap-2 items-center hover:opacity-80 transition duration-300 ease-in-out mb-2"
            key={film.id}
            onClick={() => navigate(film.id)}
          >
            <Image
              className="rounded-md"
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.title || film.original_name}
              width={150}
              height={300}
            />
            <div className="ml-2">
              <h3 className="text-slate-50 font-semibold w-[140px]">{film.title || film.original_name}</h3>
              <p className="text-yellow-400 font-light mt-2">{ film.vote_average.toFixed(1) }/10</p>
              <p className="text-lime-50 mt-2 font-semibold">{ film.release_date || film.first_air_date }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
