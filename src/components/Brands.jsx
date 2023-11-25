import React from "react";
import bmw from "../images/brands/BMW.png";
import Ford from "../images/brands/Ford.png";
import FW from "../images/brands/FW.png";
import mahindra from "../images/brands/Mahindra.png";
import Nissan from "../images/brands/Nissan.png";
import Tata from "../images/brands/Tata.png";
import Mazda from "../images/brands/Mazda.png";
import Toyota from "../images/brands/Toyota.png";

const Brands = () => {
  return (
    <div className="brands">
      <img className="brands__item" src={bmw} alt="bmw" />
      <img className="brands__item" src={Ford} alt="Ford" />
      <img className="brands__item" src={FW} alt="FW" />
      <img className="brands__item" src={mahindra} alt="Mahindra" />
      <img className="brands__item" src={Mazda} alt="Mahindra" />
      <img className="brands__item" src={Nissan} alt="Nissan" />
      <img className="brands__item" src={Tata} alt="Tata" />
      <img className="brands__item" src={Toyota} alt="Toyota" />
    </div>
  );
};

export default Brands;
