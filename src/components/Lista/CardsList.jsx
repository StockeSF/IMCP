import { useContext } from "react";

import { FilterContext } from "../../context/FilterContext";

import Cards from "../Cards";

function CardsList() {
  const { states } = useContext(FilterContext);

  const cardsArray = states.cardsList.map((card, i) => {
    return (
      <Cards
        key={i}
        cardOptions={{
          title: card.cardTitle,
          srcSet: card.cardSrcSet,
          text: card.cardText,
          button: {
            link: card.cardButtonLink,
            classTitle: "link-btn",
            text: card.cardButtonText,
          },
        }}
      />
    );
  });

  return (
    <section className="list effect">
      <div className="list__section">{cardsArray}</div>
    </section>
  );
}

export default CardsList;
