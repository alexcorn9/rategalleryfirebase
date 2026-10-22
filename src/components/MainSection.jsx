import Space1 from "../assets/Space_1.jpg";
import Space2 from "../assets/Space_2.jpg";
import Space3 from "../assets/Space_3.jpeg";
import Space4 from "../assets/Space_4.jpeg";
import Space5 from "../assets/Space_5.jpg";
import Space6 from "../assets/Space_6.jpeg";
import Space7 from "../assets/Space_7.jpeg";
import { Rate } from "./Rate";
import Promedio from "./Promedio";
import { useState } from "react";

function MainSection() {
  const [images, setImages] = useState([
    { src: Space1, rate: 0, id: 0},
    { src: Space2, rate: 0, id: 1},
    { src: Space3, rate: 0, id: 2},
    { src: Space4, rate: 0, id: 3},
    { src: Space5, rate: 0, id: 4},
    { src: Space6, rate: 0, id: 5},
    { src: Space7, rate: 0, id: 6},
  ]);

  const editaRate = (id, newRate) => {
    const newImages = images.map((img) => {
      if (img.id == id) return { ...img, rate: newRate };
      else return img;
    });

    newImages.sort((a, b) => {
      return b.rate - a.rate;
    });

    setImages(newImages);
  };

  return (
    <>
      <div className="mainSection">
        {images.map((img) => (
          <div className="scoreCard" key={img.id}>
            <img src={img.src} alt="imagen" />
            <Rate editaRate={editaRate} id={img.id} rate={img.rate}></Rate>
          </div>
        ))}
      </div>
      <Promedio images={images} />
    </>
  );
}

export default MainSection;
