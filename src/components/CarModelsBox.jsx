import React from "react";
import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import CarImg6 from "../images/cars-big/passat-box.png";
import CarModels from "./CarModels";

export const CarModelsBox = () => {
  return (
    <div className="container">
      <div className="CarModelsBox__title">
        <h2>POPULAR RENTAL DEALS</h2>
        <h3>Most popular cars rental deals</h3>
      </div>

      <div className="models-div">
        <CarModels
          carimage={CarImg1}
          cartitle={"Audi A1"}
          carprice={45}
          carbrand={"Audi"}
          carnumber={"4/5"}
          cargear={"Manual"}
          cargas={"Diesel"}
        />

        <CarModels
          carimage={CarImg2}
          cartitle={"Golf"}
          carprice={33}
          carbrand={"Golf"}
          carnumber={"4/5"}
          cargear={"Automatic"}
          cargas={"Diesel"}
        />

        <CarModels
          carimage={CarImg3}
          cartitle={"Toyota"}
          carprice={53}
          carbrand={"Toyota"}
          carnumber={"4/5"}
          cargear={"Automatic"}
          cargas={"Diesel"}
        />

        <CarModels
          carimage={CarImg4}
          cartitle={"Benz"}
          carprice={62}
          carbrand={"Benz"}
          carnumber={"4/5"}
          cargear={"Automatic"}
          cargas={"Diesel"}
        />

        <CarModels
          carimage={CarImg5}
          cartitle={"Benz"}
          carprice={33}
          carbrand={"Benz"}
          carnumber={"4/5"}
          cargear={"Automatic"}
          cargas={"Diesel"}
        />

        <CarModels
          carimage={CarImg6}
          cartitle={"Passat"}
          carprice={33}
          carbrand={"Passat"}
          carnumber={"4/5"}
          cargear={"Automatic"}
          cargas={"Diesel"}
        />
      </div>
    </div>
  );
};
