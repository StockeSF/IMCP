import { Swiper } from "swiper/react";
import { Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/scrollbar";

function SwiperTabs({ children }) {
  return (
    <Swiper className="swiperTabs" modules={[Scrollbar]} slidesPerView={"auto"}>
      {children}
    </Swiper>
  );
}

export default SwiperTabs;
