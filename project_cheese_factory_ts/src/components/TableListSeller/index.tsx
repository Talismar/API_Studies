import React, { useRef } from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { CoreContext } from "../../contexts/Context";

function TableListSeller() {
  const nameSeller = useRef<HTMLInputElement | null>(null);
  const { sellerList, api_action } = React.useContext(CoreContext);

  const newSeller = async () => {
    if (nameSeller.current?.value) {
      api_action("POST", "SellerList/", "seller", {
        name: nameSeller.current.value,
      });
    }

    if (nameSeller.current?.value) {
      nameSeller.current.value = "";
    }

    nameSeller.current?.focus();
  };

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
              <label>Nome do vendedor:</label>
              <br />
              <input type="text" ref={nameSeller} />
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
                onClick={newSeller}
              >
                Cadastrar Novo Vendedor
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1>Lista De Vendedores</h1>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Novo Vendedor
        </button>
      </div>

      <table className={`table table-striped ${styles.marginTop}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome Do Vendedor</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {sellerList.length > 0 &&
            sellerList.map((values, keys) => {
              return (
                <tr key={keys}>
                  <th scope="row">{values.id}</th>
                  <td>{values.name}</td>
                  <td>
                    <Link to={`/listSystemForSeller/${values.id}`}>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </Link>
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

export default TableListSeller;
