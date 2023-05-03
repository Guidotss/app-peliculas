import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FilmResult } from "@/interfaces";


interface FilmCardProps {
    film: FilmResult; 
}


export const FilmCard:FC<FilmCardProps> = ({ film }) => {

  const router = useRouter()

  const navigate = () => {
    router.push(`/film/${film.id}`); 
  }

  return (
    <div className="film-card" onClick={navigate}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
        alt={film.title}
        width={200}
        height={100}
        className="rounded-md"
      />
      <div className="card-body w-[200px]">
        <h4 className="card-title text-slate-50 font-semibold ml-2">{film.title}</h4>
      </div>
    </div>
  );
};
