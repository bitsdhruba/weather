import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Forecast = ({ forecast }) => {
  return (
    <div className="h-32 my-2 py-2 px-3 bg-[#CDC1FF] sm:max-w-[816px]">
      <Swiper slidesPerView={"4"} spaceBetween={12} className="mySwiper">
        <ul className="flex gap-3">
          {forecast?.length > 0
            ? forecast?.map((hour, i) => {
                return (
                  <div key={i}>
                    <SwiperSlide>
                      <div className="bg-[#E5D9F2]/50 backdrop-blur-sm w-20 h-[6.75rem] border-2 border-slate-300 rounded-lg flex flex-col items-center justify-between shadow-md shadow-[#A594F9]">
                        <h1 className="text-lg">{hour.temp_c}℃</h1>
                        <img src={hour.condition.icon} alt="condition" />
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })
            : ""}
        </ul>
      </Swiper>
    </div>
  );
};

export default Forecast;
