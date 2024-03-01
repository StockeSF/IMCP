import { useContext } from "react";

import { useParams } from "react-router-dom";

import { MainContext } from "../context/MainContext";
import FilterContextProvider from "../context/FilterContext";

import { SwiperSlide } from "swiper/react";

import SwiperHeader from "../components/Swipers/SwiperHeaders";
import CardsList from "../components/Lista/CardsList";
import Box from "../components/Box";
import FilterBtn from "../components/Lista/FilterBtn";

function Lista() {
  const { functions } = useContext(MainContext);
  const { lista } = useParams();

  return (
    <FilterContextProvider>
      <SwiperHeader>
        <SwiperSlide>
          <img
            src="/images/credito/cuentas_background.jpg"
            className="swiperHeader__img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/credito/credito_background.jpg"
            className="swiperHeader__img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/credito/servicios_background.jpg"
            className="swiperHeader__img"
          />
        </SwiperSlide>

        <Box
          boxInputs={{
            classList: "boox__list fade pc",
            title: functions.capitalize(lista),
          }}
        />

        <Box
          boxInputs={{
            classList: "lista sp effect",
            title: functions.capitalize(lista),
          }}
        />
      </SwiperHeader>

      <h1 className="list-title">IMCP - {functions.capitalize(lista)}</h1>

      <FilterBtn />
      <CardsList />
    </FilterContextProvider>
  );
}

export default Lista;
