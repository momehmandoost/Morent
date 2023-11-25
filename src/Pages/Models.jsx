import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

import {
  IconCar,
  IconPhone,
  IconStar,
  IconMan,
  IconDashboard,
  IconChartRadar,
} from "@tabler/icons-react";

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
