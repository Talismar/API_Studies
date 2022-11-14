import React, {useEffect} from 'react';
import { useParams } from "react-router-dom"
import TableListSystem from "../TableListSystem"

function ListSystem({setSystemList, systemList, api_action}) {
  
  const id = useParams().id
  // const liter = useRef(0)
  
  useEffect(() => {
    api_action("GET", `SellerList/${id}`, "system")
  },[api_action, id])

  return (
    <main className='container'>
      
      <TableListSystem setSystemList={setSystemList} systemList={systemList} api_action={api_action} seller_id={id}/>

    </main>
  );
}

export default ListSystem;