import Link from "next/link"
import styles from "../styles/hf/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
            <nav className={styles.navegacion}>
                <Link href="/">Inicio</Link>
                <Link href="/searchm">Buscar en el mapa</Link>
                <Link href="/nosotros">Nosotros</Link>    
                <Link href="/hospedajes ">Hospedajes</Link>
            </nav>

            <p className={styles.copyright}>Todos los derechos reservados</p>

        </div>

    </footer>
  )
}

export default Footer