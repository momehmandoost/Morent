import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Star from "../images/cars-big/star.svg";
import CarImg1 from "../images/cars-big/audi-box.png";

import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import CarImg6 from "../images/cars-big/passat-box.png";

import { Link } from "react-router-dom";
import {
  IconCar,
  IconPhone,
  IconStar,
  IconMan,
  IconDashboard,
  IconChartRadar,
} from "@tabler/icons-react";
import CarModels from "../components/CarModels";
import { CarModelsBox } from "../components/CarModelsBox";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <CarModelsBox />

        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Models;
