import React, {useRef, useEffect} from 'react';
import styles from "./styles.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrash, faPenToSquare} from "@fortawesome/free-solid-svg-icons"

function TableListPurchase({setPurchasesList, purchasesList, api_action, list_id}) {

  const amountLiter = useRef("")

  const newItemIntoList = async () => {
    if (amountLiter.current.value) {
      await api_action('POST', 'purchase/', "purchases", {"amount_of_liters": amountLiter.current.value,  "name_list": list_id})
    }
    amountLiter.current.value = ""
    amountLiter.current.focus()
  }

  useEffect(() => {
    return () => {
      console.log("Purchase Unmount");
      setPurchasesList([])
    }
  }, [setPurchasesList])

  return (
    <>    
    
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Cadastrar Novo Vendedor</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          
            <label>Informe Quantidade De Litros:</label><br />
            <input type="number" ref={amountLiter}/><br />
            
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={newItemIntoList}>Anotar</button>
          </div>
        </div>
      </div>
    </div>

    <h1>Lista Digital</h1>

    <div className='d-grid gap-2 d-md-flex justify-content-md-end mt-4'>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Nova Anotação</button>
    </div>
    
    <table className={`table table-striped ${styles.marginTop}`}>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Quantidade De Listros</th>
        <th scope="col">Ações</th>
      </tr>
    </thead>
    <tbody>
      
        {
          Object.keys(purchasesList).length > 0 && 
          
          purchasesList.purchase_set.map((values, keys) => {
            return (
              <tr key={keys}>
                <th scope="row">{values.id}</th>
                <td>{values.amount_of_liters}</td>
                <td>
                  <FontAwesomeIcon icon={faPenToSquare}/>
                  &nbsp;&nbsp;
                  <FontAwesomeIcon icon={faTrash}/>
                </td>
              </tr>
            )
          })
        }
      
    </tbody>
  </table>
  </>
  );
}

export default TableListPurchase;