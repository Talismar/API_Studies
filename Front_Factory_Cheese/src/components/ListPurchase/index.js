import React, {useEffect} from 'react';
import { useParams } from "react-router-dom"
import TableListPurchase from "../TableListPurchase"

function ListPurchase({purchasesList, api_action}) {
  
  const id = useParams().id
    
  useEffect(() => {
    api_action("GET", `SystemList/${id}`, "purchases")
  },[api_action, id])

  return (
    <main className='container'>
      
      {/* <label>Digite a quantidade de litros:</label>
      <input type="text" ref={liter}/>
      <button onClick={new_item}>Adicionar</button> */}
      <TableListPurchase purchasesList={purchasesList} api_action={api_action} list_id={id}/>

    </main>
  );
}

export default ListPurchase;