import React, {useEffect} from 'react';
import { useParams } from "react-router-dom"
import TableListPurchase from "../TableListPurchase"

function ListPurchase({setPurchasesList, purchasesList, api_action}) {
  
  const id = useParams().id
    
  useEffect(() => {
    api_action("GET", `SystemList/${id}`, "purchases")
  },[api_action, id])

  return (
    <main className='container'>
    
      <TableListPurchase setPurchasesList={setPurchasesList} purchasesList={purchasesList} api_action={api_action} list_id={id}/>

    </main>
  );
}

export default ListPurchase;