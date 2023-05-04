import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router"
import { UiContext } from "@/context";


export const Navbar = () => {

  const router = useRouter(); 
  const { setTiping } = useContext(UiContext); 
  

  const condition = router.pathname === '/';
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTiping(e.target.value);
  }


  return (
    <nav className={`flex justify-between z-10 right-0 ${condition ? 'bg-slate-900 p-5' : 'absolute p-2'}`}>
      <h1 className={`text-4xl text-slate-50 font-semibold ${condition ? 'block' : 'hidden'}`}>Guivana 2</h1>
      <div className="flex gap-5">
        {
          condition 
          ? (
            <input
              className="bg-slate-700 p-2 rounded-lg mr-2 text-slate-50"
              onChange={handleChange}
            />
          )
          :(
            <Link href='/' passHref legacyBehavior>
              <a className="text-slate-50 text-2xl mr-2 hover:opacity-[0.7]">
                Home
              </a>
            </Link>
          )
        }
      </div>
    </nav>
  )
}