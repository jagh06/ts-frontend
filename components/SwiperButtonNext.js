import React from 'react'
import { useSwiper } from 'swiper/react'
import style from "../styles/carrousel/Carrousel.module.css"
import { FcNext } from "react-icons/fc"
import { GrNext } from "react-icons/gr"

export const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
        <div className={style.swipernavbtns}>
            <button onClick={() => swiper.slideNext()}><GrNext size={15}/></button>
        </div>
    )
}
