import { useState } from 'react';
import { Link,NavLink,Navigate } from 'react-router-dom'; 
import { Dropdown,DropdownItem,DropdownMenu,DropdownToggle } from 'reactstrap'; 
import { Form } from '../form/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
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
                      <NavLink to='/films/Action'>Action</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to='/films/Adventure'>Adventure</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to='/films/Animation'>Animation</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to='/films/Comedy'>Comedy</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
            </li>
          </ul>
        </nav>
    </header>
  )
}