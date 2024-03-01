import { useContext } from "react";

import { MainContext } from "../../context/MainContext";

import { SwiperSlide } from "swiper/react";
import SwiperCredits from "../Swipers/SwiperCredits";

import Cards from "../Cards";

function Card() {
  const { jsons } = useContext(MainContext);
  const { cards } = jsons;

  const cardArray = cards.index.map((indexCardList, i) => {
    return (
      <SwiperSlide key={i}>
        <Cards
          cardOptions={{
            title: indexCardList.cardTitle,
            srcSet: indexCardList.cardSrcSet,
            text: indexCardList.cardText,
            imgClass: "swiper-lazy",
            button: {
              link: indexCardList.cardButtonLink,
              classTitle: "link-btn",
              text: "Saber más",
            },
          }}
        />
      </SwiperSlide>
    );
  });

  return (
    <>
      <section className="credits">
        <h1 className="credits__title effect">Conoce nuestros Créditos</h1>
        <SwiperCredits>{cardArray}</SwiperCredits>
      </section>
    </>
  );
}

export default Card;
