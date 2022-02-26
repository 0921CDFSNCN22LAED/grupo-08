import React from "react";
import banner5 from "../img/banner5.png";
import banner1 from "../img/banner1.jpg";
import banner3 from "../img/banner4.jpg";
import banner4 from "../img/banner3.jpg";

import "../App.css";

function home() {
  return (
    <div>
      <section>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-label="Slide 1"
              ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={banner1}
                height="350px"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item ">
              <img
                src={banner4}
                height="350px"
                class="d-block w-100"
                aria-current="true"
                alt="..."
              />
            </div>
            <div class="carousel-item ">
              <img
                src={banner5}
                height="350px"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item ">
              <img
                src={banner3}
                height="350px"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
}
export default home;