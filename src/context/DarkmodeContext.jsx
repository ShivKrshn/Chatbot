import { createContext, useEffect, useState } from "react";

export const DarkmodeContext = createContext();

export const DarkmodeContextProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState(
    JSON.parse(localStorage.getItem("darkmode")) || false
  );

  const Toggle = () => {
    setDarkmode(!darkmode);
  };

  useEffect(() => {
    localStorage.setItem("darkmode", darkmode);
  }, [darkmode]);

  return (
    <DarkmodeContext.Provider value={{ darkmode, Toggle }}>
      {children}
    </DarkmodeContext.Provider>
  );
};
