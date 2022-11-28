import { useState, createContext, useContext, useEffect } from "react";
import moment from "moment/moment";
const MyContext = createContext();
export const useMainContext = () => useContext(MyContext);
export const MainContextProvider = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState("light");
  const [cardTheme, setCardTheme] = useState("lightCard");
  const [testTheme, setTestTheme] = useState("lightTest");
  const [switchbtn, setSwitchbtn] = useState('lightSwitch')
  const [heroTheme, setHeroTheme] = useState('lightHero')
  useEffect(() => {
   const time =  moment().format('A');
   if(time === 'PM'){
    setTheme('dark')
    setCardTheme('darkCard')
    setSwitchbtn('darkSwitch')
    setHeroTheme('darkHero')
    console.log(time, theme)
   }else{
    setTheme('light')
    setCardTheme('lightCard')
    setSwitchbtn('lightSwitch')
    setHeroTheme('lightHero')
    console.log(time, "its AM")
   }
   console.log(time)
  }, [])
  
  
  return (
    <MyContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
        cardTheme: cardTheme,
        setCardTheme: setCardTheme,
        testTheme: testTheme,
        setTestTheme: setTestTheme,
        switchbtn: switchbtn,
        setSwitchbtn: setSwitchbtn,
        heroTheme: heroTheme, 
        setHeroTheme: setHeroTheme,
        // date: date,
        // setDate: setDate,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
