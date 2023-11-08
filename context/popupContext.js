import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

function PopupProvider(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const value = {
    showPopup,
    setShowPopup,
    showRegister,
    setShowRegister,
  };
  return (
    <PopupContext.Provider value={value} {...props}></PopupContext.Provider>
  );
}

function usePopup() {
  const context = useContext(PopupContext);
  if (typeof context === "undefined")
    throw new Error("usePopup must be used within a PopupProvider");
  return context;
}

export { PopupProvider, usePopup };
