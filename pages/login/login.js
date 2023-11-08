"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from "next-auth/react"
import styles from "../../styles/login/Login.module.css"
import LoginInfo from '@/components/FooterLogin'
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const data = await signIn("credentials", {
                redirect: false,
                email,
                password,
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="contenedor">
            <div className={styles.login}>
                <div className={styles.contenido}>
                    <div className={styles.logo}>
                        <Image layout="responsive" width={300} height={300} src="../../images/next.svg"
                            alt="Image logo" />
                    </div>
                    <div className={styles.formulario}>
                        <form className={styles.form}>
                            <div>
                                <h2>Inicia sesión o crea una cuenta</h2>
                            </div>
                            <div>
                                <h3>Correo electronico</h3>

                            </div>
                            <div>
                                <input type='email' id='email_field' className='form-control'
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <button type='submit' className={styles.buttonsig}>
                                    Siguiente
                                </button>
                            </div>
                            <div>
                                <p className={styles.question}>No estas registrado? <Link className={styles.register} href="">Registrate</Link></p>
                            </div>
                            <div>
                                <div className={styles.beforeafter}>O</div>
                            </div>
                            <div>
                                <button type="button" className={styles.botonGoogle} onClick={() => signIn("google", { callbackUrl: "/" })}>
                                    <FcGoogle size={40}/>
                                    {/* <Image className={styles.svg} src="https://authjs.dev/img/providers/google.svg"
                                        width={35} height={35} /> */}
                                    <span>Acceder con Google</span>
                                </button>
                            </div>
                            <div>
                                <button type="button" className={styles.botonGoogle} onClick={() => signIn("google", { callbackUrl: "/" })}>
                                    <BsApple size={38}/>
                                    {/* <Image className={styles.svg} src="https://authjs.dev/img/providers/apple.svg"
                                        width={35} height={35} /> */}
                                    <span>Acceder con Apple</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <footer className={styles.footer}>
                    <LoginInfo />
                </footer>
            </div>
        </main>
    )
}

export default Login