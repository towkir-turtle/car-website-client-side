import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import BrandStory from "../BrandStory/BrandStory";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Products></Products>
      <BrandStory></BrandStory>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
