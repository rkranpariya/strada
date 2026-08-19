import React from "react";
import { imagedata } from "./Productdata";

const Section5 = () => {
  return (
    <div>
      <div className="container my-5 ">
        <div className="row px-1">
          {imagedata.map((valu, inde) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 border flex justify-content-center">
                <img src={valu.images} alt="" className="p-5 img-fluid w-75  grayscale opacity-75 hover:grayscale-0 hover:opacity-100!"/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section5;
