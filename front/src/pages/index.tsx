import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { filmsApi } from "@/api";
import { Film, FilmResult } from "@/interfaces";
import { FilmsLayOut } from "@/components";
import { FilmCard } from "@/components/films";

interface HomeProps {
  films: FilmResult[];
}
const Home: NextPage<HomeProps> = ({ films }) => {

  return (
    <FilmsLayOut
      title="Guivana 2"
      pageDescription="Aca vas a encontrar todas las peliculs subidas al sitio web de guivana"
    >
      <div className="flex items-center justify-center w-full mt-10">
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {films.map((film) => (
            <div key={film.id} onClick={() => {console.log(film.id)}}>
               <FilmCard film={ film }/>
            </div>
          ))}
        </div>
      </div>
    </FilmsLayOut>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await filmsApi.get<Film>("/films");
  
  return {
    props: {
      films: data,
    },
  };
};

export default Home;