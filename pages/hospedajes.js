import Layout from "@/components/Layout";
import Entrada from "@/components/Entrada";
import styles from "../styles/Blog.module.css"

const Blog = ({entradas}) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/hotels?populate=*`
  // data.map(data=>console.log(data.description))
  entradas.data.map(entradas => console.log(entradas.id))

  return (
    <Layout
      pagina="Blog"
    >

      <main className="contenedor">
        <h2>Destinos</h2>
      
        <div className={styles.blog}>
          {entradas.data.map(entrada => (
            <Entrada
              key={entrada.id}
              entrada={entrada}
            />
            
          ))}    
        </div>

      </main>
  </Layout>
  )
}

/** Sintaxis basica para exportar server side props */
export async function getServerSideProps() {
  
  /** const url = 'http://127.0.0.1:1337/api/hotels' */
  const url = `${process.env.API_URL}/api/hotels?populate=*`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
  return {
    props: {
      entradas
    }
  }
}

export default Blog

/** para el json en consola */
/*
useEffect(() => {
    const consultarAPI = async () => {
      const url = 'http://localhost:1337/api/hotels'
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      console.log(resultado)
    }
    consultarAPI()
  }, [])
*/