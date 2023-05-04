import { FC, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FilmResult } from "@/interfaces";
import { UiContext } from "@/context";


interface FilmCardProps {
    film: FilmResult; 
}


export const FilmCard:FC<FilmCardProps> = ({ film }) => {

  const router = useRouter()
  const { isLoading, startLoading, stopLoading } = useContext(UiContext); 

  const navigate = () => {
    startLoading();
    router.push(`/film/${film.id}`); 
    setTimeout(() => {
      stopLoading(); 
    }, 3000)
  }

  return (
    <div className="film-card" onClick={navigate}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
        alt={film.title}
        width={200}
        height={100}
        className="rounded-md"
        loading="eager"
      />
      <div className="card-body w-[200px]">
        <h4 className="card-title text-slate-50 font-semibold ml-2">{film.title}</h4>
      </div>
    </div>
  );
};
