import Link from "next/link"
import Image from "next/image"
import { useSession, signOut } from "next-auth/react"
import styles from "../styles/hf/Header.module.css"
import { useEffect, useRef, useState } from "react"
import styleDrop from "../styles/dropdown/Dropdown.module.css"
import { AiOutlineUser } from "react-icons/ai";
import { MdCardTravel } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";

const Header = () => {
  const { data: session, status } = useSession()

  const [open, setOpen] = useState(false)

  //cerrar menu al hacer click fuera de el
  const menuRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target !== menuRef.current && e.target !== imgRef.current) {
        setOpen(false)
      }
    })
  }, [])

  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barraandiconuser}>
          <div className={styles.barra}>
            <Link href="/">
              <Image width={120} height={60} src="/images/nexticon.png" alt="Image logo" />
            </Link>
            <nav className={styles.navegacion}>
              <Link href="/">Recomendados</Link>
              <Link href="/hospedajes">Hospedajes</Link>
              <Link href="/searchm">Buscar en le mapa</Link>
              <Link href="/slider">slider</Link>
            </nav>
          </div>

          {/* DropDown */}
          <div className={styleDrop.iconuser}>
            {status === "authenticated" ?
              <div>
                <div className={styleDrop.dropbody}>
                  <div>
                    {/* <p>{session.user.email}</p>
                      <p>{session.user.name}</p> */}
                    <Image
                      className={styleDrop.imageuser}
                      src={session.user.image}
                      width={100} height={100}
                      alt="avatar"
                      onClick={() => setOpen(!open)} ref={imgRef}
                    />

                  </div>
                  <div>
                    {
                      open && (
                        <div ref={menuRef} className={styleDrop.droplist}>
                          <ul className={styleDrop.dropul}>
                            <span>
                              <div className={styleDrop.divuser}>
                                <Image className={styleDrop.divimageuser} src={session.user.image} width={100} height={100} alt="avatar" />
                                <div className={styleDrop.divnameemail}>
                                  <p className={styleDrop.username}>{session.user.name}</p>
                                  <p className={styleDrop.useremail}>{session.user.email}</p>
                                </div>
                              </div>
                            </span>
                            <li>
                              <Link className={styleDrop.link} href="">
                                <AiOutlineUser size={20} /><p>Gestionar cuenta</p>
                              </Link>
                            </li>
                            <li>
                              <Link className={styleDrop.link} href="">
                                <MdCardTravel size={20} /><p>Reservados</p>
                              </Link>
                            </li>
                            <li onClick={() => {
                              signOut("google", { callbackUrl: "/" })
                            }}>
                              <span className={styleDrop.link}>
                                <BiLogOutCircle size={20} /><p>Cerrar Sesion</p>
                              </span>
                            </li>
                          </ul>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div> : <Link href="/login/login" className={styleDrop.iniciarsesion}>Iniciar Sesion</Link>
            }
          </div>
        </div>
      </div>
    </header>

  )
}



export default Header
