import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

const ImageSlider = () => {
  const { allProduct } = useContext(AuthContext);

  console.log(allProduct);

  return (
    <div className="dark:bg-[#333] max-w-screen-xl mx-auto p-4">
      <Swiper
        className="my-10 "
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={4}
        autoHeight={false}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 2,
          },
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {allProduct.map((item) => {
          return (
            <SwiperSlide key={item._id}>
              <div className="max-w-md mx-auto bg-gray-100 shadow-lg">
                <div className="group relative h-[280px] dark:bg-gray-800">
                  <img
                    className="w-[400px] object-cover h-[280px]"
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-gray-500 opacity-60 rounded-md"></div>
                  <div className="absolute bottom-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gray-800 opacity-0 bg-opacity-70 group-hover:h-full group-hover:opacity-100 duration-500">
                    <h1 className="text-2xl font-semibold text-white text-center">
                      {item.name}
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
