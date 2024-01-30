import { useEffect, useState } from "react";
import Legion from "../assets/images/Legion-Go-Z1.jpg";

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  showButtons?: boolean;
}

export const Carrousel = (props: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.autoPlay || props.showButtons) {
      const interval = setInterval(() => {
        selectedNewImage(currentIndex, props.images);
      }, 5000);
      return () => clearInterval(interval);
    }
  });

  const selectedNewImage = (_index: number, images: string[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? currentIndex < images.length - 1
        : currentIndex > 0;
      const nextIndex = next
        ? condition
          ? currentIndex + 1
          : 0
        : condition
        ? currentIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }, 1000);
  };

  const previous = () => {
    selectedNewImage(currentIndex, props.images, false);
  };

  const next = () => {
    selectedNewImage(currentIndex, props.images);
  };

  return (
    <section className="carousel">
      <div className="carousel-container">
        <img
          src={`../../../src/ui/assets/images/${selectedImage}`}
          alt="Carousel"
          className={loaded ? "loaded" : ""}
          loading="lazy"
        />

        <div className="carousel-buttons">
          {props.showButtons ? (
            <>
              <button onClick={previous}>Anterior</button>
              <button onClick={next}>Siguiente</button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="carousel-static">
        <img src={Legion} alt="Pc's" loading="lazy" />
      </div>
    </section>
  );
};
