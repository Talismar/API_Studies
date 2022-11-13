import React from 'react';
import {StyleHeader} from './styles'
import { Link, Outlet } from "react-router-dom"

function Header() {
  return (
    <>
      <StyleHeader>

        <h1>Logo System</h1>

        <section>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Sobre</Link>
              </li>
            </ul>
          </nav>      
        </section>
        
      </StyleHeader>
      
    <Outlet />
  </>
  );
}

export default Header;