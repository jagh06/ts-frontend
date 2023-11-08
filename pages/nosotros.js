import Layout from "@/components/Layout"
import Image from "next/image"
import styles from "../styles/Nosotros.module.css"

const Nosotros = () => {
  return (
    <Layout
      pagina="Nosotros"
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>

          <Image layout="responsive" width={300} height={300}
            src="/images/nosotros.png" alt="Imagen sobre nosotros" />

          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas mollis magna faucibus enim imperdiet, ullamcorper
              interdum libero laoreet. In congue velit sed diam finibus
              convallis. Nulla vel felis vulputate, congue risus et,
              condimentum mi. Praesent ante enim, viverra scelerisque sem
              imperdiet, dapibus condimentum neque. Donec porta consequat
              suscipit. In eleifend consectetur ipsum eu ultrices. </p>

            <p>Nullam eu lorem risus. Pellentesque sodales, eros sed mattis
              convallis, est risus condimentum neque, sed hendrerit elit odio
              sit amet augue. Vestibulum maximus risus at finibus finibus. Curabitur
              porttitor ac ligula eu sagittis. Donec nulla lectus, hendrerit sit
              amet neque quis, molestie vehicula erat. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas mollis magna faucibus enim imperdiet, ullamcorper
              interdum libero laoreet. In congue velit sed diam finibus
              convallis. Nulla vel felis vulputate, congue risus et,
              condimentum mi. Praesent ante enim, viverra scelerisque sem
              imperdiet, dapibus condimentum neque. Donec porta consequat
              suscipit. In eleifend consectetur ipsum eu ultrices. </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros