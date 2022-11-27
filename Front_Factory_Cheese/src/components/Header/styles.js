import styled from "styled-components";

export const StyleHeader = styled.header`
  height: 100px;
  width: 100vw;
  background-color: #2f2c2b;
  color: white;

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
