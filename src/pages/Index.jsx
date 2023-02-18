import SwiperHeader from "../components/Swipers/SwiperHeaders";
import { SwiperSlide } from "swiper/react";
import { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import slide1 from "../assets/images/index/banner.jpg";
import slide2 from "../assets/images/index/banner2.jpg";
import slide3 from "../assets/images/index/banner3.jpg";
import Abtus from "../components/Index/Abtus";
import Options from "../components/Index/Options";
import Card from "../components/Index/Card";
import Box from "../components/Box";

function Index() {
  const { useObserver, timeStamps } = useContext(MainContext);

  const [observer, setElements, entries] = useObserver({
    root: null,
    threshold: 0.5,
  });

  useEffect(() => {
    const effectClass = document.querySelectorAll(".effect");
    setElements(effectClass);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const scrolledElements = entry.target;
        entry.target.classList.replace("effect", "visible");
        observer.unobserve(scrolledElements);
      }
    });
  }, [entries, observer]);

  return (
    <>
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
            classList: "boox__index fade pc",
            title: "Instituto Municipal de Crédito Popular",
            subtitle: `${timeStamps.year - 1946} años sirviendo a Caracas`,
            text: "El I.M.C.P. como Institución Financiera se encarga de prestar asesoramiento, apoyo logístico, toma de decisiones, definición de las estrategias financieras, planificación y coordinación junto a la presidencia en los objetivos específicos que hacen de nuestra Institución un modelo como ente público financiero en el Municipio Libertador.",
          }}
        />

        <Box
          boxInputs={{
            classList: "boox__index sp effect",
            title: "Instituto Municipal de Crédito Popular",
            subtitle: `${timeStamps.year - 1946} años sirviendo a Caracas`,
          }}
        />
      </SwiperHeader>

      <Options />

      <Card />

      <Abtus />
    </>
  );
}

export default Index;
