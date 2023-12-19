import "./App.css";
import PreNavbar from "./components/PreNavbar";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Slider from "./components/Slider.jsx";
import data from "./data/data.json";
import Offers from "./components/Offers.jsx";
import Heading from "./components/Heading.jsx";
import StarProduct from "./components/StarProduct.jsx";
import HotAcceessoriesMenu from "./components/HotAcceessoriesMenu.jsx";
import HotAcceessories from "./components/HotAcceessories.jsx";
import ProductReviews from "./components/ProductReviews.jsx";
import Video from "./components/Video.jsx";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div>
      <Router>
        <PreNavbar />
        <Navbar />
        <Slider start={data.banner.start}/>
        <Offers  offer  ={data.offer}/>
        <Heading text={"Star Products"}/>
        <StarProduct starProduct={data.starProduct}/>
        <Heading text={"Hot Accessories"}/>
        <HotAcceessoriesMenu/>
        <Route exact path="/music">
        <HotAcceessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/> 
        </Route>
        <Route exact path="/smartDevice">
        <HotAcceessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/> 
        </Route>
        <Route exact path="/home">
        <HotAcceessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/> 
        </Route>
        <Route exact path="/lifestyle">
        <HotAcceessories lifeStyle={data.hotAccessories.lifestyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/> 
        </Route>
        <Route exact path="/mobileAccessories">
        <HotAcceessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/> 
        </Route>
        <Heading text={"Product Reviews"}/>
        <ProductReviews productReviews={data.productReviews}/>
        <Heading text={"Videos"}/>
        <Video vidoes ={data.videos}/>
        <Heading text={"IN THE PRESS"}/>
        <Banner banner={data.banner}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
