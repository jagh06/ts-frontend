import { React } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import { register } from "swiper/element/bundle"
import Card from "@/components/Card";
import style from "../styles/carrousel/Carrousel.module.css"
import { SwiperButtonPrev } from "@/components/SwiperButtonPrev"
import { SwiperButtonNext } from '@/components/SwiperButtonNext';

register();

import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';

const Slide = ({ answers }) => {
    const swiper = useSwiper();
    return (
        <div className={style.app}>
            <Swiper className={style.swiperswiper}
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={1}
                slidesPerView={4}
            >
                <div className={style.divbuttonprev}>
                    <SwiperButtonPrev />
                </div>
                <div className={style.swiper}>
                    {answers.data.map(answer => (
                        <SwiperSlide className={style.reslide} key={answer.id}>
                            <Card key={answer.id} answer={answer} />
                        </SwiperSlide>
                    ))}
                </div>
                <div className={style.divbuttonnext}>
                    <SwiperButtonNext />
                </div>
            </Swiper>
        </div>
    )
}

export default Slide