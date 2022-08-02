import React from "react";
import Hmc from "./hmc/Hmc";
import Banner from "./Home_banner/Banner";
import Footer from "./Home_footer/Footer";

function Home() {
  return (
    <div>
      <Hmc msg={true} />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
