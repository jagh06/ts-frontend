import Layout from "@/components/Layout";
import style from "../styles/Index.module.css";
import Image from "next/image";
import Link from "next/link";
import Slide from "./slide";

export default function Home({ answers }) {
  return (
    <Layout pagina="Inicio">
      <div className={style.banner}>
        <main className="contenedor">
          <div className={style.primero}>
            <div className={style.bannerquestion}>
              <div className={style.divquestion}>
                <h3>¿Quiere ser cliente de TS?</h3>
              </div>
              <div className={style.divbutton}>
                <h4>
                  Somos una empresa dedicada a la promocion de hospedajes.{" "}
                </h4>
                <button className={style.bannerbutton}>
                  <Link className={style.linkstyle} href={"/client/login"}>
                    Registra tu hospedaje
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <main className="contenedor">
        {/* llamar componente recomendados */}
        <div>
          <h1>¿Qué estás buscando?</h1>
          <div className={style.recomendados}>
            <div className={style.banners}>
              <Image
                layout="responsive"
                className={style.imageselect}
                width={100}
                height={100}
                src="/images/footer.jpg"
              />
              <div className={style.textobanners}>
                <p>Hoteles que se encuentran en el centro de la ciudad</p>
                <Link className={style.linkbanner} href="">
                  ver mas
                </Link>
              </div>
            </div>

            <div className={style.banners}>
              <Image
                layout="responsive"
                className={style.imageselect}
                width={100}
                height={100}
                src="/images/banner.jpg"
              />
              <div className={style.textobanners}>
                <p>Hoteles lejanos a la ciudad o alrededores</p>
                <Link className={style.linkbanner} href="">
                  ver mas
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* llamar omponente card */}
        <Slide answers={answers} />

        {/* llamar componente ofertas */}
        <div>
          <h1>Ofertas</h1>
          <p>Promociones, descuentos y ofertas especiales para ti</p>
        </div>

        {/* llamar tipo de alojamiento */}
        <div>
          <h1>Tipo de alojamiento</h1>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/hotels?populate=*`);
  const answers = await res.json();

  return {
    props: { answers },
  };
}
