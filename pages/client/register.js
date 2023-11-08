import React, { useState } from "react";
import Head from "next/head";
import styles from "../../styles/client/register/registerclient.module.css";
import LoginInfo from '@/components/FooterLogin'

const RegisterClient = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRPassword] = useState("");
  return (
    <main className="contenedor">
      <Head>
        <title>Register</title>
      </Head>
      <div className={styles.registerclient}>
        <div className={styles.backgroung}>
          <form className={styles.form}>
            <h3>Crea una cuenta</h3>
            <div className={styles.field}>
              <p>Nombre</p>
              <div>
                <input
                  type="name"
                  id="name_fiel"
                  className="form_control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.field}>
              <p>Apellidos</p>
              <div>
                <input
                  type="name"
                  id="lastname_fiel"
                  className="form_control"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.field}>
              <p>Correo electronico</p>
              <div>
                <input
                  type="email"
                  id="email_fiel"
                  className="form_control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.field}>
              <p>Contraseña</p>
              <div>
                <input
                  type="password"
                  id="password_fiel"
                  className="form_control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.field}>
              <p>Repite tu contraseña</p>
              <div>
                <input
                  type="rpassword"
                  id="rpassword_fiel"
                  className="form_control"
                  value={rpassword}
                  onChange={(e) => setRPassword(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.divbutton}>
              <button type="submit" className={styles.button}>Crear cuenta</button>
            </div>
          </form>
        </div>
        <footer className={styles.footer}>
          <LoginInfo/>
        </footer>
      </div>
    </main>
  );
};

export default RegisterClient;
