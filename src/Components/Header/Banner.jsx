import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { EffectCreative } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, [setBanner]);
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCreative]}
      className=""
      effect="creative"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log("slide changed")}
      onSwiper={() => console.log(Swiper)}
    >
      {banner?.map((item) => (
        <SwiperSlide key={item.id}>
          <div
            className="hero mt-4 mb-10 min-h-screen lg:min-h-[500px] rounded-md"
            style={{ backgroundImage: `url(${item?.image})` }}
          >
            <div className="hero-overlay rounded-md bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-lg">
                <h1 className="text-2xl text-gray-300 font-bold">
                  {item.slogan}
                </h1>
                <h2 className="text-white text-xl font-bold">{item.title}</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
