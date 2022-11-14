import React, {useEffect} from 'react';
import { useParams } from "react-router-dom"
import TableListPurchase from "../TableListPurchase"

import { CoreContext } from "../../contexts/Context"

function ListPurchase() {

  const {api_action} = React.useContext(CoreContext)

  const id = useParams().id
    
  useEffect(() => {
    api_action("GET", `SystemList/${id}`, "purchases")
  },[api_action, id])

  return (
    <main className='container'>
    
      <TableListPurchase list_id={id}/>

    </main>
  );
}

export default ListPurchase;