import React from "react";

const Section7 = () => {
  return (
    <div>
      <div className="container-fluid bg-gray-200 py-5">
        <div className="container">
          <h2 className="text-center text-5xl! fw-lighter">Pricing</h2>
          <p className="text-center">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit. Sed ut perspiciatis <br /> unde omnis iste natus
            error sit voluptatem accusantium doloremque laudantium totam rem
            aperiam
          </p>
          <div className="row">
            <div className="col bg-gray-50 p-5 m-2">
              <p className="text-uppercase text-gray-500">Starter</p>
              <p className="text-5xl fw-bold pb-2">
                <span className="text-xl fw-medium align-super">$</span>9
                <span className="text-gray-500 text-xl">/mo</span>
              </p>
              <p className="text-gray-500 border-b border-b-gray-300 pb-5">
                Praesent sapien massa, convallis a pellentesque nec egestas.
              </p>
              <p className="text-gray-500 border-b border-b-gray-300 pb-3">
                Curabitur pretium tincidunt
              </p>
              <p className="border-b border-b-gray-300 pb-3">
                Integer ante arcu accumsan
              </p>
              <p className="border-b border-b-gray-300 pb-3">
                Pellentesque habitant morbi
              </p>
              <a
                href=""
                className="text-decoration-none text-gray-800! border p-2 w-full d-block mt-5 text-center fw-medium hover:text-green-700! hover:border-green-700!"
              >
                Get Started
              </a>
            </div>
          <div className="col bg-gray-50 p-5 m-2 border-t-2 border-t-green-600">
              <p className="text-uppercase text-gray-500">Growth</p>
              <p className="text-5xl fw-bold pb-2">
                <span className="text-xl fw-medium align-super">$</span>29
                <span className="text-gray-500 text-xl">/mo</span>
              </p>
              <p className="text-gray-500 border-b border-b-gray-300 pb-5">
                Maecenas nec odio et ante tincidunt tempus donec vitae.
              </p>
              <p className="text-gray-500 border-b border-b-gray-300 pb-3">
                Aenean leo ligula porttitor
              </p>
              <p className="border-b border-b-gray-300 pb-3">
                Nam quam nunc blandit vel
              </p>
              <p className="border-b border-b-gray-300 pb-3">
               Donec pede justo fringilla
              </p>
              <a
                href=""
                className="text-decoration-none text-gray-50! bg-green-600 border p-2 w-full d-block mt-5 text-center fw-medium  hover:bg-green-800!"
              >
                Get Started
              </a>
            </div><div className="col bg-gray-50 p-5 m-2">
              <p className="text-uppercase text-gray-500">Enterprise</p>
              <p className="text-5xl fw-bold pb-2">
                <span className="text-xl fw-medium align-super">$</span>49
                <span className="text-gray-500 text-xl">/mo</span>
              </p>
              <p className="text-gray-500 border-b border-b-gray-300 pb-5">
                Sed consequat auctor neque nec ullamcorper sit amet.
              </p>
              <p className="text-gray-500 border-b border-b-gray-300 pb-3">
                Vivamus elementum semper
              </p>
              <p className="border-b border-b-gray-300 pb-3">
                Quisque rutrum integer eget
              </p>
              <p className="border-b border-b-gray-300 pb-3">
                Praesent blandit laoreet nibh
              </p>
              <a
                href=""
                className="text-decoration-none text-gray-800! border p-2 w-full d-block mt-5 text-center fw-medium hover:text-green-700! hover:border-green-700!"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
