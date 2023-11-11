import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../../styles/client/dashboard/HeaderClient.module.css";
import { useRouter } from "next/router";

const NewAccount = () => {
  const router = useRouter();
  const { email } = router.query;
  return (
    <div>
      <header className={styles.header}>
        <div>
          <div>
            <Link href="/">
              <Image
                width={120}
                height={60}
                src="/images/nexticon.png"
                alt="Image logo"
              />
            </Link>
          </div>
        </div>
      </header>
      <main className="contenedor">
        <div>
          <p>Verifica tu correo {email}</p>
        </div>
        <div className={styles.spanemail}>
          <p>Hemos enviado un correo <span>{email}</span> con un enlace de verificación.</p>
        </div>
      </main>
    </div>
  );
};

export default NewAccount;
