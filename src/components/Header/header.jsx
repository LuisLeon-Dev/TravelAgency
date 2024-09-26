import React from "react";
import Navbar from "../Navbar/navbar.jsx";
import imageHeader from "../../img/maldivas@2x.png";

const header = () => {
  return (
    <>
      <Navbar />
      <header>
        <figure>
          <img
            src={imageHeader}
            alt="persona en un cayac navegando por un rio"
            className="w-full object-cover"
          />
          <figcaption className="text-center p-20">
            Somos una agencia apasionada por crear viajes inolvidables. Desde el
            destino hasta la selección de actividades, nos encargamos de todos
            los detalles para que disfrutes al máximo cada momento de tu
            jornada.
          </figcaption>
        </figure>
      </header>
    </>
  );
};

export default header;
