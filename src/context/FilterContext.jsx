import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import { MainContext } from "./MainContext";

export const FilterContext = createContext();

function FilterContextProvider({ children }) {
  const { jsons } = useContext(MainContext);
  const { cards } = jsons;
  const { lista } = useParams();
  const [params, setParams] = useSearchParams();
  let filter = params.get("f") ?? "todos";

  //busqueda en el json con la url suministrada
  let catAssignment = cards[lista];

  if (!catAssignment) return <Navigate to="/error" />;

  function setCategories() {
    const categories = [
      "todos",
      ...new Set(catAssignment.map((card) => card.category)),
    ];

    return categories.filter((category) => {
      return category !== undefined;
    });
  }

  //FilterBtn y CardList
  const [filterBtn, setFilterBtn] = useState(filter);
  const [cardsList, setCardsList] = useState(catAssignment);

  useEffect(() => {
    //comprueba si el parametro $f envia una informacion existente en el json cards
    const activeFilterButton = (fParam) => {
      const paramExists = setCategories().some((category) => {
        return category === fParam;
      });

      if (paramExists) {
        return setFilterBtn(filter);
      } else {
        return setFilterBtn(setCategories()[0]);
      }
    };

    //para establecer los nuevos elementos filtrados con el button
    const filterCards = (filtered) => {
      if (filtered === "todos") {
        return setCardsList(catAssignment);
      }

      const filteredCards = catAssignment.filter(
        (card) => card.category === filtered
      );

      return setCardsList(filteredCards);
    };

    filterCards(filter);
    activeFilterButton(filter);
  }, [setParams]);

  return (
    <FilterContext.Provider
      value={{
        elements: { catAssignment },
        states: { lista, cardsList, filterBtn },
        setStates: { setParams },
        functions: { setCategories },
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContextProvider;
