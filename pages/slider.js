import Card from "@/components/Card";
import style from "../styles/carrousel/Slider.module.css"
import { FcNext, FcPrevious } from "react-icons/fc"

import { React, useRef } from 'react'

const Slider = () => {
  const ref = useRef(null)

  return (
    <div className={style.bodyslider}>
      <div className={style.container}>
        <FcPrevious className={style.controlprev} alt="" />
        <div className={style.slider}>
          <Card className={style.image} />
          <Card className={style.image} />
          <Card className={style.image} />
          <Card className={style.image} />
          <Card className={style.image} />
          <Card className={style.image} />
          <Card className={style.image} />
        </div>
        <FcNext id="controlprev" className={style.controlnext} alt="" />
      </div>
    </div>
  )
}

export default Slider