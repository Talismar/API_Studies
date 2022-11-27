import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import styles from "./styles.module.css";
import { CoreContext } from "./contexts/Context";

/* My Components */
import ListSeller from "./components/ListSeller";
import Footer from "./components/Footer/index";
import ListSystem from "./components/ListSystem";
import ListPurchase from "./components/ListPurchase";

function App() {
  const { api_action } = React.useContext(CoreContext);

  React.useEffect(() => {
    api_action("GET", "SellerList/");
  }, [api_action]);

  return (
    <StyleAppContainer className="Test">
      <div className={styles.main}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<ListSeller />} />
              <Route path="listSystemForSeller/:id" element={<ListSystem />} />
              <Route path="listPurchase/:id" element={<ListPurchase />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </StyleAppContainer>
  );
}

export default App;

const NoPage: React.FC = () => {
  return <h1>Page Not Fount</h1>;
};

const StyleAppContainer = styled.div`
  
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;

`;
