import React from "react";
import { createContext, useState, useCallback } from "react";
import axios from "axios";

const base_url = "http://18.212.222.50:8000/";

interface ISellerList {
  id: number;
  name: string;
}

type ISystemList = {
  listsystem_set: ISellerList[];
} & ISellerList;

type IPurchasesList = {
  purchase_set: { id: number; amount_of_liters: string }[];
};

interface MainContextData {
  api_action: (
    action: string,
    endpoint: string,
    saveInto?: string,
    datas?: Record<string, unknown>
  ) => void;

  sellerList: ISellerList[];
  setSellerList: React.Dispatch<React.SetStateAction<ISellerList[]>>;

  systemList: ISystemList;
  setSystemList: React.Dispatch<React.SetStateAction<ISystemList>>;

  purchasesList: IPurchasesList;
  setPurchasesList: React.Dispatch<React.SetStateAction<IPurchasesList>>;
}

export const CoreContext = createContext({} as MainContextData);

type Props = {
  children: JSX.Element;
};

function CoreProvider({ children }: Props) {
  const [sellerList, setSellerList] = useState<ISellerList[]>([]);
  const [systemList, setSystemList] = useState<ISystemList>({} as ISystemList);
  const [purchasesList, setPurchasesList] = useState<IPurchasesList>(
    {} as IPurchasesList
  );

  const api_action = useCallback(
    (
      action: string,
      endpoint: string,
      saveInto = "seller",
      datas?: Record<string, unknown>
    ): void => {
      if (action === "GET") {
        axios.get(base_url + endpoint).then((res) => {
          if (saveInto === "seller") {
            setSellerList(res.data);
          } else if (saveInto === "system") {
            setSystemList(res.data);
          } else if (saveInto === "purchases") {
            setPurchasesList(res.data);
          }
        });
      } else if (action === "POST" && datas && Object.keys(datas).length > 0) {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        axios.post(base_url + endpoint, datas, config).then((res) => {
          if (saveInto === "seller") {
            setSellerList((old) => [...old, res.data]);
          } else if (saveInto === "system") {
            api_action("GET", `SellerList/${res.data.seller}`, "system");
          } else if (saveInto === "purchases") {
            api_action("GET", `SystemList/${res.data.name_list}`, "purchases");
          }
        });
      }
    },
    []
  );

  return (
    <CoreContext.Provider
      value={{
        api_action,
        sellerList,
        setSellerList,
        systemList,
        setSystemList,
        purchasesList,
        setPurchasesList,
      }}
    >
      {children}
    </CoreContext.Provider>
  );
}

export default CoreProvider;
