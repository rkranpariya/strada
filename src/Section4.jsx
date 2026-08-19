import React from "react";
import { data1 } from "./Productdata";

const Section4 = () => {
  return (
    <div>
      <div className="container py-5 text-center">
        <p className="text-6xl fw-light">Features</p>
        <p className="text-gray-400 pb-5">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit. Sed ut perspiciatis <br /> unde omnis iste natus
          error sit voluptatem accusantium doloremque laudantium totam rem
          aperiam
        </p>
        <div className="row mt-5">
          {data1.map((valu, inde) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 col-12 py-3">
                  <div className="card p-4 h-100 hover:border-gray-950!">
                    <p className="flex justify-content-center">{valu.icon}</p>
                    <p className="text-gray-800 text-2xl">{valu.title}</p>
                    <p className="text-gray-600 text-l">{valu.details}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="row border border-gray-800 align-items-center mx-auto w-75 py-4 my-4">
          <div className="col-lg-1 col-12">
            <p className="flex justify-content-center"><svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              fill="currentColor"
              className="bi bi-lightning-charge text-green-700"
              viewBox="0 0 16 16"
            >
              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
            </svg></p>
          </div>
          <div className="col-lg-8 col-12 text-lg-start">
            <p className="text-xl fw-medium">Blazing Speed at Every Step</p>
            <p>
              Nulla consequat massa quis enim. Donec pede justo fringilla vel
              aliquet nec vulputate eget arcu.
            </p>
          </div>
          <div className="col-lg-3 col-12 flex justify-content-center">
            <a href="" className="flex align-items-center gap-2  text-decoration-none text-green-700! fw-medium text-l border-green-700! border w-75 p-3 justify-content-center hover:bg-green-700 hover:text-gray-100!">
              <span>Explore Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                fill="currentColor"
                className="bi bi-arrow-right fw-bold"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section4;
