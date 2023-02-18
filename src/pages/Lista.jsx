import { useContext } from "react";
import { SwiperSlide } from "swiper/react";
import { MainContext } from "../context/MainContext";
import FilterContextProvider from "../context/FilterContext";
import SwiperHeader from "../components/Swipers/SwiperHeaders";
import slide1 from "../assets/images/credito/cuentas_background.jpg";
import slide2 from "../assets/images/credito/credito_background.jpg";
import slide3 from "../assets/images/credito/servicios_background.jpg";
import CardsList from "../components/Lista/CardsList";
import Box from "../components/Box";
import FilterBtn from "../components/Lista/FilterBtn";
import { useParams } from "react-router-dom";

function Lista() {
  const { functions } = useContext(MainContext);
  const { lista } = useParams();

  return (
    <FilterContextProvider>
      <SwiperHeader>
        <SwiperSlide>
          <img src={slide1} className="swiperHeader__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} className="swiperHeader__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} className="swiperHeader__img" />
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
