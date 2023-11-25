import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Brands from "../components/Brands";
import Models from "./Models";
import { CarModelsBox } from "../components/CarModelsBox";

function Home() {
  return (
    <>
      <Hero />
      <BookCar />
      <Brands />
      <PlanTrip />
      <CarModelsBox />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </>
  );
}

export default Home;
