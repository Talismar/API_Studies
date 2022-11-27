import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TableListSystem from "../TableListSystem";

import { CoreContext } from "../../contexts/Context";

function ListSystem() {
  const id = useParams().id;
  const { api_action } = React.useContext(CoreContext);

  useEffect(() => {
    api_action("GET", `SellerList/${id}`, "system");
  }, [api_action, id]);

  return (
    <main className="container">
      {typeof id === "string" && <TableListSystem seller_id={id} />}
    </main>
  );
}

export default ListSystem;
