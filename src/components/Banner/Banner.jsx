import "./Banner.scss";

function Banner({ img, text }) {
  return (
    <div className="banner">
      <img
        // ajoutez une classe si nous avons un texte pour la bannière
        className={"banner__img" + (text ? " banner__img--text" : "")}
        src={img}
        alt="Kasa"
      />
      <h1 className="banner__text">{text}</h1>
    </div>
  );
}

export default Banner;
