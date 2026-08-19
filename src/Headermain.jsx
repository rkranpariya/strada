import React, { useEffect, useState } from "react";

const Headermain = () => {
  let [scroll, setscroll] = useState(false);
  let [menu, setmenu] = useState(false);
  useEffect(() => {
    let upscroll = () => {
      setscroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", upscroll);
    return () => {
      window.removeEventListener("scroll", upscroll);
    };
  }, []);
  return (
    <div>
      <div className={`container-fluid headermain ${scroll ? "active" : ""}`}>
        <div className="container p-4 mb-xl-5">
          <div className="row z-20 align-items-center gy-3">
            <div className="col-12 col-lg-2 col-md-12 text-lg-start text-center">
              <p className="text-white fw-medium text-4xl font-medium">
                Starda
              </p>
            </div>
            <div
              className={`col-12 col-lg-7 col-md-12 text-lg-start text-center ${menu ? "d-block" : "d-none d-lg-block"}`}
            >
              <ul className="d-flex justify-between flex-lg-row flex-column align-items-center text-center ps-0">
                <li>
                  <a
                    href=""
                    className="text-decoration-none text-white fs-6 fw-medium hover:border-b-2 hover:border-b-green-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-decoration-none text-white fs-6 fw-medium hover:border-b-2  hover:border-b-green-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-decoration-none text-white fs-6 fw-medium hover:border-b-2  hover:border-b-green-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-decoration-none text-white fs-6 fw-medium hover:border-b-2  hover:border-b-green-700"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-decoration-none text-white fs-6 fw-medium hover:border-b-2  hover:border-b-green-700"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-decoration-none text-white fs-6 fw-medium hover:border-b-2  hover:border-b-green-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* scroll time menu open and close */}
            {scroll && (
              <button
                onClick={() => setmenu(!menu)}
                className="d-lg-none"
              >
                {menu ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-chevron-bar-up mx-auto"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.646 11.854a.5.5 0 0 0 .708 0L8 8.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708M2.4 5.2c0 .22.18.4.4.4h10.4a.4.4 0 0 0 0-.8H2.8a.4.4 0 0 0-.4.4"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-chevron-bar-down mx-auto"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      d="M3.646 4.146a.5.5 0 0 1 .708 0L8 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708M1 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                )}
              </button>
            )}
            <div className="col-12 col-lg-3 col-md-12 text-lg-end text-center">
              <a
                href=""
                className="text-decoration-none text-white bg-green-600 p-2 rounded-2"
              >
                {" "}
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headermain;
