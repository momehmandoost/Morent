import React from "react";
import Star from "../images/cars-big/Star.svg";
import {
  IconCar,
  IconPhone,
  IconStar,
  IconMan,
  IconDashboard,
  IconChartRadar,
} from "@tabler/icons-react";

import { Link } from "react-router-dom";

const CarModels = (props) => {
  return (
    <div className="models-div__box">
      <div className="models-div__box__img">
        <img src={props.carimage} alt="car_img" />
        <div className="models-div__box__descr">
          <div className="models-div__box__descr__name-price">
            <div className="models-div__box__descr__name-price__name">
              <p>{props.cartitle}</p>
              <span>
                <img src={Star} alt="star" />
                <h2
                  style={{
                    marginRight: 3,
                  }}
                >
                  2.7
                </h2>
                <h2 className="carmodel">(100+ Review)</h2>
              </span>
            </div>
            <div className="models-div__box__descr__name-price__price">
              <h4>${props.carprice}</h4>
              <p>per day</p>
            </div>
          </div>
          <div className="models-div__box__descr__name-price__details">
            <span
              style={{
                textAlign: "right",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconCar /> &nbsp; {props.carbrand}
            </span>
            <span
              style={{
                textAlign: "right",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconMan /> &nbsp; <div>{props.carnumber}</div>
            </span>
            <span
              style={{
                textAlign: "right",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconDashboard />
              &nbsp;{props.cargear}
            </span>
            <span
              style={{
                textAlign: "right",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconChartRadar /> &nbsp; {props.cargas}
            </span>
          </div>
          <div className="models-div__box__descr__name-price__btn">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              Book Ride
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModels;
