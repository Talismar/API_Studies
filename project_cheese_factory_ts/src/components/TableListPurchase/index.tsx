import React, { useRef, useEffect } from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { CoreContext } from "../../contexts/Context";

type Props = {
  list_id: string;
};

function TableListPurchase({ list_id }: Props) {
  const amountLiter = useRef<HTMLInputElement | null>(null);

  const { setPurchasesList, purchasesList, api_action } =
    React.useContext(CoreContext);

  const newItemIntoList = async () => {
    if (amountLiter.current?.value) {
      api_action("POST", "purchase/", "purchases", {
        amount_of_liters: amountLiter.current.value,
        name_list: list_id,
      });
    }

    if (amountLiter.current?.value) {
      amountLiter.current.value = "";
    }
    amountLiter.current?.focus();
  };

  useEffect(() => {
    return () => {
      console.log("Purchase Unmount");
      setPurchasesList({} as typeof purchasesList);
    };
  }, [setPurchasesList]);

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Cadastrar Novo Vendedor
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label>Informe Quantidade De Litros:</label>
              <br />
              <input type="number" ref={amountLiter} />
              <br />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={newItemIntoList}
              >
                Anotar
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1>Lista Digital</h1>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Nova Anota????o
        </button>
      </div>

      <table className={`table table-striped ${styles.marginTop}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Quantidade De Listros</th>
            <th scope="col">A????es</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(purchasesList).length > 0 &&
            purchasesList.purchase_set.map((values, keys) => {
              return (
                <tr key={keys}>
                  <th scope="row">{values.id}</th>
                  <td>{values.amount_of_liters}</td>
                  <td>
                    <FontAwesomeIcon icon={faPenToSquare} />
                    &nbsp;&nbsp;
                    <FontAwesomeIcon icon={faTrash} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default TableListPurchase;
