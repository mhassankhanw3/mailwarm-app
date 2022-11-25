import { useState, createContext, useContext } from "react";
const MyContext = createContext();
export const useMainContext = () => useContext(MyContext);
export const MainContextProvider = (props) => {
  const [theme, setTheme] = useState("light");
  const [cardTheme, setCardTheme] = useState("lightCard");
  const [testTheme, setTestTheme] = useState("lightTest");
  const [switchbtn, setSwitchbtn] = useState('lightSwitch')

  const { children } = props;
  return (
    <MyContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
        cardTheme: cardTheme,
        setCardTheme: setCardTheme,
        testTheme: testTheme,
        setTestTheme: setTestTheme,
        switchbtn, setSwitchbtn,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
