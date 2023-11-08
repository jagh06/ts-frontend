import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import styles from "../styles/Layout.module.css"

const Layout = ({ children, pagina }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Turingo Space - {pagina}</title>
        <meta name="description" content="Sitio Web de Hospedajes" />
      </Head>

      <Header />
      {children}

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout