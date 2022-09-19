import { useState } from 'react';
import { Link,NavLink,Navigate } from 'react-router-dom'; 
import { Dropdown,DropdownItem,DropdownMenu,DropdownToggle } from 'reactstrap'; 
import { Form } from '../form/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () =>{
    if(window.scrollY >= 35){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll',changeColor)

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className={color ? 'header header-transparent' : 'header header-normal'}>
        <h2>
          <Link to='/'>GuidFlix</Link>
        </h2>
        <Form />
        <nav>
          <ul>
            <li>
              <NavLink to='/films'>Films</NavLink>
            </li>
            <li>
                <Dropdown isOpen={ isOpen } toggle={ toggle }>
                  <DropdownToggle className='buttonToggle' caret>Generos</DropdownToggle>

                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink to='/genero/acción'>Accion</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to='/genero/drama'>Drama</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to='/genero/animación'>Animacion</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to='/genero/comedia'>Comedia</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
            </li>
          </ul>
        </nav>
    </header>
  )
}