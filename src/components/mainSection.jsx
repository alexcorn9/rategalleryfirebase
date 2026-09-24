import Space1 from "../assets/Space_1.jpg";
import Space2 from "../assets/Space_2.jpg";
import Space3 from "../assets/Space_3.jpeg";
import Space4 from "../assets/Space_4.jpeg";
import Space5 from "../assets/Space_5.jpg";
import Space6 from "../assets/Space_6.jpeg";
import Space7 from "../assets/Space_7.jpeg";
import Rate from "./rate";
import Envia from "./button";
import Modal from "./modal";
import { useState } from "react";

function MainSection() {

  const [images, setImages] = useState([
    { src: Space1, rate: 0, id: 1 },
    { src: Space2, rate: 0, id: 2 },
    { src: Space3, rate: 0, id: 3 },
    { src: Space4, rate: 0, id: 4 },
    { src: Space5, rate: 0, id: 5 },
    { src: Space6, rate: 0, id: 6 },
    { src: Space7, rate: 0, id: 7 },
  ]);

  const [modal, setModal] = useState(false);
  const [promedio, setPromedio] = useState(false);

  const actualizaRate = (index, valor) => {
    const newImages = [...images];
    newImages[index].rate = valor;
    setImages(newImages.sort((a, b) => b.rate - a.rate));
  };

  const sacaPromedio = () => {
    const prom =
      images.reduce((acum, img) => (acum += img.rate), 0) / images.length;
    console.log(`el promedio es ${prom}`);
    setModal(true);
    setPromedio(prom);
  };

  const reinicia = () => {
    const newImages = [...images];
    newImages.map((img) => (img.rate = 0));
    setImages(newImages);
  };

  return (
    <>
      <div className="mainSection">
        {images.map((img) => (
          <div key={img.id} className="scoreCard">
            <img src={img.src} alt="imagen" />
            <Rate ref={img.ref} conoceRate={actualizaRate} index={images.indexOf(img)} />
          </div>
        ))}
        <Envia onClick={sacaPromedio}>
          Calcula promedio
        </Envia>
        <Modal
          isOpen={modal}
          onClose={() => setModal(false)}
          reinicia={reinicia}
        >
          <h2>Calificación de la galería</h2>
          <p>El promedio de la calificaion es: {promedio}</p>
        </Modal>
      </div>
    </>
  );
}

export default MainSection;