import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { filmsApi } from "@/api";
import { Film, FilmResult } from "@/interfaces";
import { FilmCard } from "@/components/films";

interface FilmPageProps {
  film: FilmResult;
  relatedFilms: FilmResult[];
}

const FilmPage: NextPage<FilmPageProps> = ({ film, relatedFilms }) => {
  const topRelatedFilms = relatedFilms.filter(
    (film: FilmResult) => film.vote_average >= 6.6
  );

  return (
    <div>
      <Image
        className="shadow-xl w-full h-[80vh] opacity-[0.6] absolute"
        src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
        alt={film.title}
        width={500}
        height={200}
        loading="eager"
      />
      <div className="flex">
        <Image
          className="h-[70vh] w-[22vw] ml-4 rounded-xl mt-5 z-10 shadow-sm shadow-slate-950"
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={`${film.title} poster`}
          width={300}
          height={300}
        />
        <div className="z-10 w-1/2 mt-16 ml-10">
          <h1 className="text-5xl font-bold text-slate-50 mb-3">
            {film.title}
          </h1>
          <p className="text-slate-50 font-semibold">{film.overview}</p>
          <p className="text-slate-50 mt-10">
            release date: {film.release_date}
          </p>
          <div className="flex gap-2">
            <p className="text-slate-50 mt-1">Genres: </p>
            {film.genres.map((genre) => (
              <p key={genre.id} className="text-slate-50 mt-1">
                {genre.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-14 gap-5 ml-2"> 
        {topRelatedFilms.map((film) => (
            <div key={film.id}> 
                <FilmCard film={film} />
            </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await filmsApi.get("/films?id=1");
  const path = data.map((id: number) => id);

  return {
    paths: path.map((id: number) => ({ params: { id: id.toString() } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string };
  const { data } = await filmsApi.get<Film>(`/films/${id}`);
  const { data: relatedFilms } = await filmsApi.get<Film[]>(
    `films/${id}/related`
  );

  return {
    props: {
      film: data,
      relatedFilms,
    },
  };
};

export default FilmPage;
