import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../../styles/client/dashboard/HeaderClient.module.css";
import { useRouter } from "next/router";

const HeaderClient = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== menuRef.current && e.target !== imageRef.current) {
        setOpen(false);
      }
    });
  }, []);

  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.headerclient}>
          <div className={styles.navbar}>
            <Link href="/">
              <Image
                width={120}
                height={60}
                src="/images/nexticon.png"
                alt="Image logo"
              />
            </Link>
            <nav className={styles.navegacion}>
              <Link
                href="/client/dashboard/content-manager"
                className={
                  currentRoute === "/client/dashboard/content-manager"
                    ? styles.active
                    : styles.nonActive
                }
              >
                Pagina de Inicio
              </Link>
              <Link
                href="/client/dashboard/add-lodging"
                className={
                  currentRoute === "/client/dashboard/add-lodging"
                    ? styles.active
                    : styles.nonActive
                }
              >
                Agregar hotel
              </Link>
              <Link
                href="/client/dashboard/my-lodging"
                className={
                  currentRoute === "/client/dashboard/my-lodging"
                    ? styles.active
                    : styles.nonActive
                }
              >
                Mi hospedaje
              </Link>
            </nav>
          </div>
          <div className={styles.iconuser}>
            <div>
              <div className={styles.dropBody}>
                {/* <div>
                  <Image
                    className={styles.imageuser}
                    src="/images/nexticon.png"
                    width={100}
                    height={100}
                    alt="avatar"
                    onClick={() => setOpen(!open)}
                    ref={imageRef}
                  />
                </div> */}
                <div>
                  <div className={styles.divinitialnameuser}>
                    <h3 className={styles.h3initialnameuser}>J</h3>
                  </div>
                </div>

                <div>{/* dropdown */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderClient;
