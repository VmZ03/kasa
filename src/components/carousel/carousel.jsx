import React, { useState } from "react";
import "./carousel.scss";

function Carousel({ pictures }) {
  // index de l'image visible
  const [visibleIndex, setVisibleIndex] = useState(0);

  // s'il n'y a pas de photos
  if (!Array.isArray(pictures) || pictures.length === 0) {
    return null;
  }

  // nombre total de photos
  const nbPictures = pictures.length;

  // afficher l'image précédente (l'appel sur la première image affiche la dernière image)
  const prevPicture = () => {
    setVisibleIndex(visibleIndex === 0 ? nbPictures - 1 : visibleIndex - 1);
  };

  // afficher l'image suivante (l'appel sur la dernière image affiche la première image)
  const nextPicture = () => {
    setVisibleIndex(visibleIndex === nbPictures - 1 ? 0 : visibleIndex + 1);
  };

  return (
    <section className="carousel">
      {/* flèche gauche (si plus d'une image) */}
      {nbPictures > 1 && (
        <div
          onClick={prevPicture}
          className="carousel__arrow carousel__arrow--left"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      )}

      {/* flèche droite (si plus d'une image) */}
      {nbPictures > 1 && (
        <div
          onClick={nextPicture}
          className="carousel__arrow carousel__arrow--right"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      )}

      {/* image */}
      {pictures.map((picture, logo) => {
        return (
          <div key={logo}>
            {logo === visibleIndex && (
              <img
                src={picture}
                alt={"image" + { logo }}
                className="carousel__picture"
              />
            )}
          </div>
        );
      })}

      {/* nombre d'image */}
      {nbPictures > 1 && (
        <p className="carousel__number">
          {visibleIndex + 1}/{nbPictures}
        </p>
      )}
    </section>
  );
}

export default Carousel;
