import { Swiper } from "swiper/react";
import { Lazy, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/lazy";

function SwiperCredits({children}) {
  return (
    <Swiper
      className="swiperCreditos"
      modules={[Navigation, Pagination, Lazy,]}
      navigation={true}
      pagination={{
        dynamicBullets: true,
      }}
      preloadImages={false}
      lazy={{
        loadPrevNext: true,
      }}
      slidesPerView={1}
      spaceBetween={1}
      breakpoints={{
        578: {
          slidesPerView: 2,
          spaceBetween: 20,
        }
      }}
      speed={800}
    >
      {children}
    </Swiper>
  );
}

export default SwiperCredits;
