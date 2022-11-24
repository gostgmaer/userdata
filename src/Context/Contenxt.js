import sublinks from "Applications/StripeMenu/data";
import React, { useState,useReducer, useContext,useEffect } from "react";
import { notifyerror, notifySuccess } from "Utils/Notification/notify";
import { v4 as uuidv4 } from "uuid";
import Reducer from "./reducer";
const AppContext = React.createContext();

const initialState = {}

export const data =[[
  {
      "id": "b508afd7-187d-4280-b6a9-ad7e4e95ad8d",
      "name": "asdasd",
      "amount": "+200"
  },
  {
      "id": "8da4ee56-a843-4414-889f-6b3385779bcc",
      "name": "New Cash",
      "amount": "+2000"
  },
  {
      "id": "4c29551a-7673-4c99-addd-83f0acb2c4ba",
      "name": "Gas",
      "amount": "-1000"
  },
  {
      "id": "d2556eb9-4cd8-4836-a711-2101c92be4f7",
      "name": "asd55",
      "amount": "-10"
  },
  {
      "id": "21423932-c081-47f3-bf92-1f5a829bf2aa",
      "name": "asdasd",
      "amount": "-25"
  }
]]

const AppProvider = ({ children }) => {


  const [state, dispatch] = useReducer(Reducer, initialState);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});
  const [loading, setloading] = useState(true);
  const [Amount, setAmount] = useState(0);
  const [Text, setText] = useState("");
  const [expanseHistory, setExpanseHistory] = useState([]);

  const addExpanse = (e) => {
    e.preventDefault();
    setExpanseHistory([
      ...expanseHistory,
      { id: uuidv4(), name: Text, amount: Amount },
    ]);

    notifySuccess(
      <div>
       
        Title: {Text} and City: {Amount} has added{" "}
      </div>,
      2000
    );
    setloading(false);
    setText("");
    setAmount(0);
    setTimeout( console.log("expanseHistory", expanseHistory),2000)
   
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };


  useEffect(() => {
    data.forEach(element => {
      setExpanseHistory(element)
    });
    setloading(false);
  }, []);
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        openSubmenu,
        closeSubmenu,
        closeSidebar,setExpanseHistory,
        page,
        location,
        addExpanse,Amount,Text,expanseHistory,loading,
        setAmount,
        setText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
