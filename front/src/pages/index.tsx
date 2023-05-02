import { GetServerSideProps, NextPage } from "next";
import { FilmsLayOut } from "./components/layouts/FilmsLayOut";
import { filmsApi } from "@/api";
import { Film, FilmResult } from "@/interfaces";
import Image from "next/image";

interface HomeProps {
  films: FilmResult[];
}
const Home: NextPage<HomeProps> = ({ films }) => {
  console.log(films);
  return (
    <FilmsLayOut
      title="Guivana 2"
      pageDescription="Aca vas a encontrar todas las peliculs subidas al sitio web de guivana"
    >
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-wrap gap-4 items-center justify-cente">
          {films.map((film) => (
            <div key={film.id}>
              <div>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.title}
                  width={200}
                  height={100}
                  className="rounded-md"
                />
                <div className="card-body w-[200px]">
                  <h4 className="card-title">{film.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FilmsLayOut>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await filmsApi.get<Film>("/films");
  
  return {
    props: {
      films: data,
    },
  };
};
