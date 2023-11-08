import React, { useState } from "react";
import LayoutClient from "../components/LayoutClient";
import styles from "../../../styles/client/dashboard/AddLodging.module.css";
import { baseURL } from "@/baseUrl";

const AddLodging = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [nameHotel, setNameHotel] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [cp, setCP] = useState("");
  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [city, setCity] = useState("");

  const handleFormSubmit = async (e) => {
    console.log(`${baseURL}/hotels`);
    e.preventDefault();
    await submitDataToBackend({
      name: `${name}`,
      lastname: `${lastname}`,
      email: `${email}`,
      namehotel: `${nameHotel}`,
      description: `${description}`,
      price: `${price}`,
      postalcode: `${cp}`,
      street: `${street}`,
      streetnumber: `${streetNumber}`,
      city: `${city}`,
      phone: `${phone}`,
    });

    // Clear the form after submission
    // setName("");
    // setLastname("");
    // setEmail("");
    // setNameHotel("");
    // setDescription("");
    // setPrice("");
    // setPhone("");
    // setCP("");
    // setStreet("");
    // setStreetNumber("");
    // setCity("");
  };

  const submitDataToBackend = async (data) => {
    console.log(JSON.stringify(data));
    await fetch(`${baseURL}/hotels`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <LayoutClient pagina="Add Lodging">
      <main className="contenedor">
        <div>
          <div className={styles.divform}>
            <form className={styles.formulario} onSubmit={handleFormSubmit}>
              <div className={styles.d}>
                <div className={styles.divs}>
                  <div className={styles.divpropietario}>
                    <h3>Propietario</h3>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nombre"
                      required
                    />
                    <input
                      type="text"
                      id="lasname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="Apellidos"
                      required
                    />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className={styles.divdetalles}>
                    <h3>Detalles del Hotel</h3>
                    <input
                      type="text"
                      id="nameHotel"
                      value={nameHotel}
                      onChange={(e) => setNameHotel(e.target.value)}
                      placeholder="Nombre del hotel"
                      required
                    />
                    <textarea
                      rows="6"
                      name="description"
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Descripcion"
                      required
                    ></textarea>
                    <input
                      type="number"
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Precio por habitacon"
                      required
                    />
                    <input
                      type="text"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Telefono"
                      required
                    />
                  </div>

                  <div className={styles.divubicacion}>
                    <h3>Ubicacion del hotel</h3>
                    <input
                      type="number"
                      id="cp"
                      value={cp}
                      onChange={(e) => setCP(e.target.value)}
                      placeholder="Codigo postal"
                      required
                    />
                    <input
                      type="text"
                      id="street"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      placeholder="Calle"
                      required
                    />
                    <input
                      type="number"
                      id="streetNumber"
                      value={streetNumber}
                      onChange={(e) => setStreetNumber(e.target.value)}
                      placeholder="Numero de Calle"
                      required
                    />
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ciudad"
                      required
                    />
                  </div>
                </div>
                <div className={styles.divs}>
                  <h3>Agrega algunas fotos del hotel y habitaciones</h3>
                </div>
              </div>
              <div>
                <button type="submit" className={styles.buttonForm}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </LayoutClient>
  );
};

export default AddLodging;
