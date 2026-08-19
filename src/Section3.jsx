import React from "react";

const Section3 = () => {
  return (
    <div>
      <div className="container-fluid bg-gray-950 py-5 text-center">
        <div className="container text-gray-100 mt-xl-5">
          <p className="text-uppercase text-green-700">Elevate Your Workflow</p>
          <h2>Accelerate Growth Across Every Department</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada{" "}
            <br /> fames ac turpis egestas. Vestibulum tortor quam, feugiat
            vitae ultricies <br />
            eget, tempor sit amet ante.
          </p>
          <div className="row my-xl-5 gap-lg-0 gap-2 pb-3">
            <div className="col-lg-3 col-md-6 col-12 border-2 border-gray-700  p-xl-4 m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="currentColor"
                className="bi bi-bar-char d-flex mx-auto mb-xl-3 mt-3"
                viewBox="0 0 16 16"
              >
                <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
              </svg>
              <p>
                Real-Time Reporting Suite
              </p>
            </div>
            <div className="col-lg-3  col-md-6 col-12 border-2 border-gray-700   p-xl-4 m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="currentColor"
                className="bi bi-headset mx-auto mb-xl-3 mt-3"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
              </svg><p>Round-the-Clock Assistance</p>
            </div>
            <div className="col-lg-3 col-md-6 col-12 border-2 border-gray-700 p-xl-4 m-auto ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="currentColor"
                className="bi bi-plug mx-auto mb-xl-3 mt-3"
                viewBox="0 0 16 16"
              >
                <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.08 2.08 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.92 1.92 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0M5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4z" />
              </svg><p>Seamless API Connectivity</p>
            </div>
          </div>
          <div className="d-flex justify-content-lg-center justify-content-md-center justify-content-center gap-md-3 gap-3 flex-lg-nowrap flex-wrap">
            <a href="#" className="text-decoration-none  border-2 border-green-700 fw-medium text-success p-xl-3 p-lg-3 p-3 text-xl hover:bg-green-700 hover:text-gray-100!"> Begin Your journey</a>
          <a href="#" className="text-decoration-none bg-green-700 text-white p-xl-3 p-lg-3 p-3 mx-xl-4 fw-medium text-xl hover:bg-green-800 translate duration-300">Request a Walkthrough</a>
          </div>
          <p className="my-xl-5 my-md-5 my-5 text-gray-400 fw-medium">4.8 out of 5 from 1,800+ ratings — relied on by 650+ organizations
</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
