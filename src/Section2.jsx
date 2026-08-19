import React from "react";
import { data } from "./Productdata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"
const Section2 = () => {
  return (
    <div>
      <div className="container-fluid bg-gray-100 py-xl-5">
        <div className="container py-xl-5 pb-md-5 pb-5 text-center lh-lg">
          <p className="text-uppercase text-green-600 font-medium">
            Expert Solutions
          </p>
          <h1 className="pb-xl-2">
            Driving Growth With <br /> Purpose-Built Strategies
          </h1>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices{" "}
            <br />
            posuere cubilia curae. Donec velit neque, auctor sit amet aliquam
            vel, <br />
            ullamcorper sit amet ligula.
          </p>
          <a
            href=""
            className="text-decoration-none text-success font-bold border-2 p-2"
          >
            Schedule a Discussion
          </a>
        </div>
        <div className="container pb-xl-5 pb-md-5 pb-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <div className="row">
              <div className="col-lg-3 col-md-2 col-12">
              {data.map((valu, inde) => {
                return (
                  <SwiperSlide>
                      <div className="card w-100 h-100 p-xl-4 p-md-4 p-4 text-lg-start text-md-start text-center">
                        <p className="text-end text-gray-400">0{valu.id}</p>
                        <p className="text-xl fw-medium hover:text-green-600">{valu.title}</p>
                        <p className="text-gray-500">{valu.deatail}</p>
                        <p className="text-green-600 fw-medium">Explore</p>
                      </div>
                    </SwiperSlide>
                );
              })}
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Section2;
