<<<<<<< HEAD
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ListSeller from "./components/ListSeller";
import ListSystem from "./components/ListSystem";
import ListPurchase from "./components/ListPurchase";
import Footer from "./components/Footer";
import styles from "./styles.module.css";
import { CoreContext } from "./contexts/Context";
=======
import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import ListSeller from './components/ListSeller';
import ListSystem from './components/ListSystem';
import ListPurchase from './components/ListPurchase'
import Footer from "./components/Footer"
import styles from "./styles.module.css"
>>>>>>> a10380e70017e8cf5097ee20e244d93d63227d70

import {CoreContext} from "./contexts/Context"


const NoPage = () => {
  return <h1>No found</h1>;
};

function App() {
<<<<<<< HEAD
  const { api_action } = React.useContext(CoreContext);
=======

  const { api_action } = React.useContext(CoreContext)
>>>>>>> a10380e70017e8cf5097ee20e244d93d63227d70

  useEffect(() => {
    api_action("GET", "SellerList/");
  }, [api_action]);

  return (
    <div className={styles.app}>
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
    </div>
  );
}

export default App;
