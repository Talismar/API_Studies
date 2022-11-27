import {createContext, useState, useCallback} from 'react';
import { base_url } from '../api';
import axios from 'axios';

export const CoreContext = createContext();

function CoreProvider({children}) {
  
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
  
  return (
    <CoreContext.Provider value={{
      api_action,
      sellerList, setSellerList,
      systemList, setSystemList, 
      purchasesList, setPurchasesList
      
      }}>
      {children}
    </CoreContext.Provider>
  )
}

export default CoreProvider;