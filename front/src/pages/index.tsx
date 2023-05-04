import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { filmsApi } from "@/api";
import { Film, FilmResult } from "@/interfaces";
import { FilmsLayOut } from "@/components";
import { FilmCard } from "@/components/films";
import { useContext } from "react";
import { UiContext } from "@/context";

interface HomeProps {
  films: FilmResult[];
}
const Home: NextPage<HomeProps> = ({ films }) => {

  const { tiping,isLoading } = useContext(UiContext)

  const filterdFilms = tiping==='' ? films : films.filter(film => film.title.toLowerCase().includes(tiping.toLowerCase())); 

  return (
    <FilmsLayOut
      title="Guivana 2"
      pageDescription="Aca vas a encontrar todas las peliculs subidas al sitio web de guivana"
    >
      {
        !isLoading 
          ? (
            <div className="flex items-center justify-center w-full mt-10">
              <div className="flex flex-wrap gap-5 items-center justify-center">
                { filterdFilms.length >= 1 ?  filterdFilms.map((film) => (
                  <div key={film.id} onClick={() => {console.log(film.id)}}>
                    <FilmCard film={ film }/>
                  </div>
                ))
                : (
                  <div className="flex flex-col items-center justify-center mt-36">
                    <Image
                      src="/Empty.webp"
                      alt="empty"
                      width={100}
                      height={100}
                    />
                    <h1 className="text-4xl text-slate-50 font-semibold">No se encontraron resultados</h1>
                  </div>
                )
              }
              </div>
            </div>
          )
          : ( 
            <div className="flex  w-full mt-10">
              <div className="flex flex-wrap gap-5 items-center justify-center">
                <div className="animate-pulse">
                  <div className="h-96 w-72 bg-slate-50 rounded-md ml-10"/>
                  <div className="h-10 w-1/2 p-10   bg-slate-50 rounded-md absolute top-40 left-96 mt-10"/>
                  <div className="h-10 w-72 bg-slate-50 rounded-md mt-2 absolute left-96 top-32"/>
                  <div className="flex absolute left-96 top-80 ml-2">
                    <div className="h-2 w-20 bg-slate-50 rounded-sm"/>
                    <div className="h-2 w-20 bg-slate-50 rounded-sm ml-6"/>
                  </div>
                </div>
              </div>
            </div>

          )
      }
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