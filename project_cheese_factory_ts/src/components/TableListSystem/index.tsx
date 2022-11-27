import React, { useRef, useEffect } from "react";
// import styles from "styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { CoreContext } from "../../contexts/Context";

type Props = {
  seller_id: string;
};

function TableListSystem({ seller_id }: Props) {
  /*  */
  const nameSeller = useRef<HTMLInputElement | null>(null);

  const { systemList, setSystemList, api_action } =
    React.useContext(CoreContext);

  const newListSystem = async () => {
    if (nameSeller.current?.value) {
      api_action("POST", "SystemList/", "system", {
        name: nameSeller.current.value,
        seller: seller_id,
      });
    }

    if (nameSeller.current?.value) {
      nameSeller.current.value = "";
    }

    nameSeller.current?.focus();
  };

  useEffect(() => {
    return () => {
      console.log("System Unmount");
      setSystemList({} as typeof systemList);
    };
  }, [setSystemList]);

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
              <label>Nome Da Nova Lista:</label>
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
                onClick={newListSystem}
              >
                Criar Nova Lista
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1>Caderno De Anotação Digital</h1>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
        {/* <button type="button" className={`btn btn-primary`}>New Seller</button> */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Nova Lista
        </button>
      </div>

      <table className={`table table-striped`} style={{ marginTop: "24px" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titulo Da Lista</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(systemList).length > 0 &&
            systemList.listsystem_set.map((values, keys) => {
              return (
                <tr key={keys}>
                  <th scope="row">{values.id}</th>
                  <td>{values.name}</td>
                  <td>
                    <Link to={`/listPurchase/${values.id}`}>
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

export default TableListSystem;
