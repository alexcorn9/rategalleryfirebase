import { useState } from "react";

function Promedio({ images }) {
  const [mostrar, setMostrar] = useState(false);

  const promedio = images.length ? (images.reduce((acc, img) => acc + img.rate, 0) / images.length).toFixed(1) : 0;

  return (
    <div className="boton">
      <button className="botons" onClick={() => setMostrar(!mostrar)}>
        {mostrar ? `Promedio: ${promedio} \u2605` : "Ver promedio"}
      </button>
    </div>
  );
}

export default Promedio;
