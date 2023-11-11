import Head from "next/head";
import React, { useState } from "react";
import styles from "../../styles/client/register/registerclient.module.css";
import LoginInfo from "@/components/FooterLogin";
import { useRouter } from "next/router";
import { baseURL } from "@/baseUrl";

const SetPassword = () => {
  const [password, setPassword] = useState("");
  const [rpassword, setPasswordRepeat] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordRepeatError, setPasswordRepeatError] = useState("");

  const [errorOne, setErrorOne] = useState(false);
  const [errorTwo, setErrorTwo] = useState(false);

  const router = useRouter();
  const { name, lastname, email, phone } = router.query;

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres.");
      setErrorOne(true);
      setErrorTwo(true);
    } else if (!/\d/.test(newPassword)) {
      setPasswordError("La contraseña debe tener al menos un número.");
      setErrorOne(true);
      setErrorTwo(true);
    } else if (!/[A-Z]/.test(newPassword)) {
      setPasswordError(
        "La contraseña debe tener al menos una letra en Mayuscula."
      );
      setErrorOne(true);
      setErrorTwo(true);
    } else {
      setPasswordError("");
      setErrorOne(false);
    }
  };

  const handlePasswordRepeatChange = (e) => {
    const newPasswordR = e.target.value;
    setPasswordRepeat(newPasswordR);

    if (newPasswordR != password) {
      setPasswordRepeatError("Las contraseñas no coinciden");
      setErrorTwo(true);
    } else {
      setPasswordRepeatError("");
      setErrorTwo(false);
    }
  };

  const handleFormSubmits = async (e) => {
    e.preventDefault();
    onSubmit({ name, lastname, email, password });
  };

  const onSubmit = async (query) => {
    try {
      if (errorOne != true && errorTwo != true) {
        await submitDataToBackend({
          name: name,
          lastname: lastname,
          email: email,
          phone: phone,
          password: rpassword,
        });
        const emailData = { email };
        // vista de confirmacion
        router.push({ pathname: "/client/new-account", query: emailData});
        // enviar confirmacion a gmail
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const submitDataToBackend = async (data) => {
    await fetch(`${baseURL}/clients`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <main className="contenedor">
      <Head>
        <title>Add password</title>
      </Head>
      <div className={styles.registerclient}>
        <div className={styles.backgroung}>
          <form className={styles.form} onSubmit={handleFormSubmits}>
            <h3>Crea una contraseña</h3>
            <p>
              La contraseña debe tener mínimo 8 carácteres que incluyan
              mayusculas, minusculas y numeros.
            </p>
            <div className={styles.field}>
              <p>Password</p>
              <div>
                <input
                  type="password"
                  id="password_fiel"
                  className="form_control"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            {passwordError && (
              <div className={styles.warning}>{passwordError}</div>
            )}

            <div className={styles.field}>
              <p>Repite tu contraseña</p>
              <div>
                <input
                  type="password"
                  id="rpassword_fiel"
                  className="form_control"
                  value={rpassword}
                  onChange={handlePasswordRepeatChange}
                />
              </div>
            </div>
            {passwordRepeatError && (
              <div className={styles.warning}>{passwordRepeatError}</div>
            )}

            <div className={styles.divbutton}>
              <button type="submit" className={styles.button}>
                Crear cuenta
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

export default SetPassword;
