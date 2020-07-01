import React, {createContext, useState} from "react";

// export const DateContext = createContext();

// // This context provider is passed to any component requiring the context
//  export const DateProvider = ({ children }) => {
//   const [monthval, setMonthval] = useState(new Date().getMonth());
//   const [yearval, setYearval] = useState(new Date().getFullYear());

//   return (
//     <DateContext.Provider
//       data={{
//         monthval,
//         yearval,
//         setMonthval,
//         setYearval
//       }}
//     >
//       {children}
//     </DateContext.Provider>
//   );
// };
// export const DateConsumer=DateContext.Consumer;


const DateContext = createContext([{}, () => {}]);

const DateProvider = (props) => {

  const [monthval, setMonthval] = useState(new Date().getMonth());
  const [yearval, setYearval] = useState(new Date().getFullYear());
  console.log(monthval);
  console.log(yearval);
  
  return (
    <DateContext.Provider value={{
              monthval,
              yearval,
              setMonthval,
              setYearval
            }}>
      {props.children}
    </DateContext.Provider>
  );
}

export { DateContext, DateProvider };