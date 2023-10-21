import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import PropTypes from "prop-types";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AdvertiseBanner = ({ title }) => {
  console.log(title);
  const { bannerImg } = useContext(AuthContext);

  const cocaColaAd = bannerImg.filter(
    (product) => product.title.toLowerCase() == title.toLowerCase()
  );

  console.log(bannerImg);
  return (
    <Swiper
      cssMode={true}
      loop={true}
      modules={[Pagination, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log()}
    >
      {cocaColaAd.map((adItem) => {
        return (
          <SwiperSlide key={adItem.id}>
            <div className="relative max-w-xl mx-auto mt-20">
              <img
                className="h-64 w-full object-cover rounded-md"
                src={adItem.image}
              />
              <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold">
                  {adItem.slogan}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

AdvertiseBanner.propTypes = {
  title: PropTypes.string,
};

export default AdvertiseBanner;
