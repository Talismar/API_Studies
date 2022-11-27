import React from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const Header: React.FC = () => {
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
};

export default Header;

const StyleHeader = styled.header`
  height: 100px;
  background-color: #2f2c2b;
  color: white;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  ul {
    display: flex;
    gap: 24px;
    padding: 0;
    margin: 0;
  }

  ul li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
