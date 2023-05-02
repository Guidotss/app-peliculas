import { DownArrow } from "./DownArrow"

export const Navbar = () => {
  return (
    <nav className="p-5 flex justify-between bg-slate-900">
      <h1 className="text-4xl text-slate-50 font-semibold">Guivana 2</h1>
      <ul className="flex gap-8 text-xl mr-5 text-slate-50 items-center">
        <li>
          Generos
        </li>
        <li>
          Series
        </li>
        <li>
          Peliculas
        </li>
      </ul>
    </nav>
  )
}