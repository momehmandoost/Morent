import MainImg from "../images/chooseUs/main.png";
import Image from "../images/chooseUs/Image.png";
import Box1 from "../images/chooseUs/icon1.svg";
import Box2 from "../images/chooseUs/icon2.svg";
import Box3 from "../images/chooseUs/icon3.svg";
import { IconChevronRight } from "@tabler/icons-react";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <div className="text-container">
              <div className="text-container__left">
                <img src={Image} alt="car-img" />
              </div>
              <div className="text-container__text">
                <h3>Why choose us</h3>
                <h2>Get the best experience of rental cars</h2>
                <div className="text-container__right">
                  <div className="text-container__right__box">
                    <img src={Box1} alt="car-img" />
                    <div className="text-container__right__box__text">
                      <h4>Cross Country Drive</h4>
                      <p>
                        Take your driving experience to the next level with our
                        top-notch vehicles for your cross-country adventures.
                      </p>
                    </div>
                  </div>
                  <div className="text-container__right__box">
                    {" "}
                    <img src={Box2} alt="coin-img" />
                    <div className="text-container__right__box__text">
                      <h4>All Inclusive Pricing</h4>
                      <p>
                        Get everything you need in one convenient, transparent
                        price with our all-inclusive pricing policy.
                      </p>
                    </div>
                  </div>
                  <div className="text-container__right__box">
                    {" "}
                    <img src={Box3} alt="coin-img" />
                    <div className="text-container__right__box__text">
                      <h4>No Hidden Charges</h4>
                      <p>
                        Enjoy peace of mind with our no hidden charges policy.
                        We believe in transparent and honest pricing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
