import React from 'react'
import style from "../styles/carrousel/Carrousel.module.css"
import { useSwiper } from 'swiper/react'
import { FcPrevious } from "react-icons/fc"
import { GrPrevious } from "react-icons/gr"
import { color } from 'framer-motion'

export const SwiperButtonPrev = () => {
  let iconStyles = { color: "white", fontSize: "1.5em" };
  const swiper = useSwiper()
  return (
    <div className={style.swipernavbtns}>
      <button onClick={() => swiper.slidePrev()}><GrPrevious size={15} /></button>
    </div>
  )
}
