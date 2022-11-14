import React, {useState, useEffect, useCallback} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { base_url } from './api';
import axios from 'axios';

import Header from './components/Header';

import ListSeller from './components/ListSeller';
import ListSystem from './components/ListSystem';
import ListPurchase from './components/ListPurchase'

import Footer from "./components/Footer"

import styles from "./styles.module.css"

const NoPage = () => {
  return <h1>No found</h1>;
};

function App() {

  const [sellerList, setSellerList] = useState([])
  const [systemList, setSystemList] = useState([])
  const [purchasesList, setPurchasesList] = useState([])

  const api_action = useCallback((action, endpoint, saveInto="seller", datas={}) => {
       
    if (action === 'GET'){
      axios.get(base_url + endpoint)
      .then((res) => {

        if (saveInto === "seller") {
          setSellerList(res.data)
          // console.log(res.data);
        }
        else if (saveInto === "system") {
          setSystemList(res.data)
          // console.log(res.data);
        }
        else if (saveInto === "purchases") {
          setPurchasesList(res.data)
          // console.log(res.data);
        }
      })
    }

    else if (action === 'POST' & datas !== {}){
      // console.log("API ACTION");
      // console.log(datas);
      
      const config = {
        headers:{
          'Content-Type': 'application/json'
        }
      }

      axios.post(base_url + endpoint, datas, config)
      .then((res) => {
        
        if (saveInto === "seller") {
          setSellerList(old => [...old, res.data])
        }
        else if (saveInto === "system") {
          api_action("GET", `SellerList/${res.data.seller}`, "system")
        }
        else if (saveInto === "purchases") {
          api_action("GET", `SystemList/${res.data.name_list}`, "purchases")
        }
      })
    }

  }, [])

  useEffect(() => {
    api_action('GET', 'SellerList/')
  },[api_action])

  return (
    <div className={styles.app}>

      <div className={styles.main}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<ListSeller sellerList={sellerList} api_action={api_action}/>} />
              <Route path="listSystemForSeller/:id" element={<ListSystem setSystemList={setSystemList} systemList={systemList} api_action={api_action}/>} />
              <Route path="listPurchase/:id" element={<ListPurchase setPurchasesList={setPurchasesList} purchasesList={purchasesList} api_action={api_action}/>} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      
      <div className={styles.footer}>
        <Footer/>
      </div>
    </div>
    
  );
}

export default App;
