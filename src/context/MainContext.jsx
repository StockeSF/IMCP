import { createContext } from "react";
import useObserver from "../hooks/useObserver";
import * as cards from "../jsons/cards.json";
import * as desc from "../jsons/descripcion.json";
import * as cred from "../jsons/creditos.json";
import * as acc from "../jsons/cuentas.json";

export const MainContext = createContext();

export function MainContextProvider(props) {
  //TimeStamps
  let dates = new Date();

  let timeStamps = {
    year: dates.getFullYear(),
    month: dates.getMonth(),
    monthString: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    day: dates.getDay(),
  };
  let initialYear = 2019;

  const balanceTabs = () => {
    const bTabs = [];

    for (let i = initialYear; i < timeStamps.year; i++) {
      bTabs.push(String(i));
    }

    return bTabs.reverse();
  };

  const capitalize = (text) => {
    return String(text.charAt(0).toUpperCase()) + String(text.slice(1));
  };

  const toogleState = (state, index) => {
    state(index);
  };

  //

  return (
    <MainContext.Provider
      value={{
        timeStamps,
        useObserver,
        jsons: {
          cards,
          desc,
          cred,
          acc,
        },
        functions: {
          capitalize,
          balanceTabs,
          toogleState,
        },
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
