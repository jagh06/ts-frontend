import { useRouter } from "next/navigation";
import Email from "./set-email";
import { useState } from "react";
import Head from "next/head";
import styles from "../../styles/client/register/registerclient.module.css";
import LoginInfo from "@/components/FooterLogin";

const fetchData = async (query) => {
  const response = await fetch(
    `http://localhost:3001/api/clients/email/${query}`
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Failed to fetch data from the API");
  }
};

export default function SetEmail() {
  const [data, setData] = useState(null);
  const [registrationExists, setRegistrationExists] = useState(false);
  const router = useRouter();

  const handleFormSubmit = async (query) => {
    const addedData = { emailAdded: query };
    try {
      const result = await fetchData(query);
      if (result.data === null) {
        router.push({ pathname: "/client/set-datas", query: addedData });
      } else {
        setRegistrationExists(true);
      }
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="contenedor">
      <Head>
        <title>Add Email</title>
      </Head>
      <div className={styles.registerclient}>
        <div className={styles.backgroung}>
          <Email onSubmit={handleFormSubmit} />
          {registrationExists ? (
            <p className={styles.mesaggeExists}>Esta cuenta está en uso.</p>
          ) : null}

          <footer className={styles.footer}>
            <LoginInfo />
          </footer>
        </div>
      </div>
    </main>
  );
}
