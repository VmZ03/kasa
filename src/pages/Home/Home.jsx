import React from "react";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/gallery/gallery";
import homeBannerImage from "../../Pictures/Home.png";

function Home() {
  document.title = "Kasa";

  return (
    <main className="home max-width">
      <Banner img={homeBannerImage} text={"Chez vous,\n partout et ailleurs"} />
      <Gallery />
    </main>
  );
}

export default Home;
