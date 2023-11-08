import React from 'react'
import Image from 'next/image'
import style from "../styles/cards/Card.module.css"
import Link from 'next/link'



const Card = ({ answer }) => {
    const { id } = answer
    const { titulo, resumen, publishedAt, contenido } = answer.attributes
    const image = answer.attributes.imagen.data.attributes.url

    return (
        
        <article key={id}>
            <div className={style.card}>
                <Image className={style.image} layout='responsive' src={image}
                    width={50} height={50} alt='card image' />
                <div className={style.contenido}>
                    <p>{contenido}</p>
                    <div className={style.precio}>
                        <span>Desde</span><h1>MXN  </h1>
                    </div>
                    <Link href="" className={style.link}>ver disponibilidad</Link>
                </div>
            </div>
        </article>
    )
}



export default Card