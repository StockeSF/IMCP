import { Swiper } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay, Lazy } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/lazy";

function SwiperHeader({ children }) {
  return (
    <Swiper
      className="swiperHeader"
      navigation={true}
      modules={[Navigation, Pagination, EffectFade, Autoplay, Lazy]}
      slidesPerView={1}
      speed={1500}
      pagination={{
        dynamicBullets: true,
      }}
      preloadImages={false}
      lazy={{
        loadPrevNext: true,
      }}
      autoplay={{ delay: 1500 }}
      effect="fade"
    >
      {children}
    </Swiper>
  );
}

export default SwiperHeader;
