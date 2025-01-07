import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import WaterItem from "../WaterItem/WaterItem.tsx";
import css from "./WaterList.module.css";
import "/node_modules/swiper/swiper-bundle.min.css";

const WaterList = () => {
  return (
    <div className={css.wrapper}>
      <Swiper
        wrapperTag="ul"
        className={css.list}
        modules={[Scrollbar, Pagination]}
        slidesPerView={2}
        scrollbar={{ draggable: true }}
        style={{ paddingBottom: "32px", zIndex: 0 }}
        spaceBetween={8}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }}
      >
        <SwiperSlide tag="li" style={{ display: "flex" }} className={css.item}>
          <WaterItem />
        </SwiperSlide>
        <SwiperSlide tag="li" style={{ display: "flex" }} className={css.item}>
          <WaterItem />
        </SwiperSlide>
        <SwiperSlide tag="li" style={{ display: "flex" }} className={css.item}>
          <WaterItem />
        </SwiperSlide>
        <SwiperSlide tag="li" style={{ display: "flex" }} className={css.item}>
          <WaterItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WaterList;
