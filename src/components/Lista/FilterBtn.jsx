import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

function FilterBtn() {
  const { functions, states, setStates } = useContext(FilterContext);

  const categoriesMap = functions.setCategories().map((element, i) => {
    return (
      <div className="filter__btn" key={i}>
        <button
          className={states.filterBtn === element ? "link-btn-active" : "link-btn"}
          onClick={() => {
            setStates.setParams({ f: element });
          }}
        >
          {element !== undefined && element.toUpperCase()}
        </button>
      </div>
    );
  });

  return (
    <section className="filter">
      <div className="filter__container">{categoriesMap}</div>
    </section>
  );
}

export default FilterBtn;
