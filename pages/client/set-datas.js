import React, { useState } from "react";
import Head from "next/head";
import styles from "../../styles/client/register/registerclient.module.css";
import LoginInfo from "@/components/FooterLogin";
import { useRouter } from "next/router";

const SetDatas = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const router = useRouter();
  const { emailAdded } = router.query;

  const handleFormSubmits = async (e) => {
    e.preventDefault();
    onSubmit({ name, lastname, emailAdded, phone });
  };

  const onSubmit = async (query) => {
    try {
      const addedDatas = {
        name: name,
        lastname: lastname,
        email: emailAdded,
        phone: `+52 ${phone}`
      };
      if (addedDatas) {
        if(phone.length < 10 || phone.length > 10){
          setPhoneError('El numero de telefono debe tener 10 digitos')
        }else{
          router.push({ pathname: "/client/set-password", query: addedDatas });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="contenedor">
      <Head>
        <title>Register</title>
        <link rel="stylesheet" href="/css/react-phone-number-input/style.css" />
      </Head>
      <div className={styles.registerclient}>
        <div className={styles.backgroung}>
          <form className={styles.form} onSubmit={handleFormSubmits}>
            <h3>Agrega tus datos</h3>
            <p>Email: {emailAdded}</p>
            <div className={styles.field}>
              <p>Nombre</p>
              <div>
                <input
                  type="name"
                  id="name_fiel"
                  className="form_control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
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
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <p>Número de Telefono</p>
              <div className={styles.divinput}>
                <span>+52</span>
                <input
                  type="text"
                  id="phone_fiel"
                  className="form_control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            {phoneError && <div  className={styles.warning}>{phoneError}</div>}

            <div className={styles.divbutton}>
              <button type="submit" className={styles.button}>
                Siguiente
              </button>
            </div>
          </form>
        </div>
        <footer className={styles.footer}>
          <LoginInfo />
        </footer>
      </div>
    </main>
  );
};

export default SetDatas;
