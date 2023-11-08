import Link from "next/link"
import Image from "next/image"
import { formatearFecha } from '../helpers'
import styles from "../styles/Entrada.module.css"

const Entrada = ({ entrada }) => {
  const { id } = entrada
  const { titulo, resumen, publishedAt, contenido } = entrada.attributes
  const image  = entrada.attributes.imagen.data.attributes.url

  return (
    /** poner layout="responsive" en la imagen 
     * esto va en la imagen
     * style={{ width: 'auto', height: 'auto' }}
    */
    <article>
      <Image priority="true"  layout="responsive" src={image} 
        alt={`imagen blog ${titulo}`} width="700" height="600" />

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link  className={styles.enlace} href={`/blog/${id}`}>
            Leer entrada
        </Link>
      </div>

    </article>
  )
}

export default Entrada