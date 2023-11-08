import Layout from "@/components/Layout"
import Image from "next/image"
import { formatearFecha } from "../../helpers"
import styles from "../../styles/Entrada.module.css"

const EntradaBlog = ({ entrada }) => {

    const { contenido, resumen, titulo, publishedAt } = entrada.data.attributes
    const { url } = entrada.data.attributes.imagen.data.attributes

    return (
        <Layout>
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image layout="responsive" width={400} height={400}
                        src={url} alt={`Imagen entrada ${titulo}`} />
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                        <p className={styles.resumen}>{resumen}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

// Para identificar todas las entradas
export async function getStaticPaths() {
    const url = `${process.env.API_URL}/api/hotels?populate=*`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    const paths = entradas.data.map(entrada => ({
        params: { id: entrada.id.toString() }
    }))

    return {
        paths,
        fallback: false
    }
}

// Para identificar cada entrada
export async function getStaticProps({ params: { id } }) {
    const url = `${process.env.API_URL}/api/hotels/${id}?populate=*`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()

    return {
        props: {
            entrada
        }
    }
}

// export async function getServerSideProps({ query: { id } }) {
//     /** Antes -- asignar host dentro de la solicitud*/
//     const url = `http://127.0.0.1:1337/api/hotels/${id}?populate=*`
//     /** Despues -- host guardado en variable dentro de .env.local */
//     const url = `${process.env.API_URL}/api/hotels/${id}?populate=*`
//     const respuesta = await fetch(url)
//     const entrada = await respuesta.json()

//     return {
//         props: {
//             entrada
//         }
//     }
// }

export default EntradaBlog

/** 
 * import { useRouter } from "next/router"
 * Leer con Hook
 * Para leer el router dinamico en consola
 * const router = useRouter()
 * console.log(router)
 */