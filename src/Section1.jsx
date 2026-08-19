import React from "react";

const Section1 = () => {
  return (
    <div>
      <div className="container my-lg-5 my-md-5 my-sm-5 my-5 py-xl-5">
        <div className="row">
          <div className="col-lg-5 col-12 text-lg-start text-center pb-5">
            <h3>Curabitur Blandit Tempus Porttitor </h3>
            <p className="mb-xl-5">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Maecenas faucibus mollis interdum. Donec id elit non mi porta
              gravida at eget metus.
            </p>
            <div className="text-uppercase border-y-2 border-y-gray-500 py-4 d-flex justify-content-lg-start justify-content-evenly flex-lg-nowrap flex-wrap mb-xl-4">
              <div className="d-flex pe-xl-5 text-green-700">
                <h1 className="text-4xl">15</h1>
                <p className="pt-4 ps-2 text-gray-500">
                  Years of <br /> Practice{" "}
                </p>
              </div>
              <div className="border-l-2 border-l-gray-500 d-flex text-green-700">
                <h1 className="text-4xl  ps-xl-3">420+</h1>
                <p className="pt-4 ps-2 text-gray-500">
                  Completed <br />
                  Works
                </p>
              </div>
            </div>
            <a
              href=""
              className="text-decoration-none text-success text-xl border-bottom border-success "
            >
              Discover More
            </a>
          </div>
          <div className="col-lg-7 col-12">
            <div className="row mx-auto">
              <div className="col-12 col-lg-6 col-md-6 border-r-2 border-r-gray-400">
                <img
                  src="https://bootstrapmade.com/content/demo/Strada/assets/img/about/about-portrait-7.webp"
                  alt=""
                />
              </div>
              <div className="col-12 col-lg-6 col-md-6 text-lg-start text-center pt-lg-0 pt-5">
               <p className="flex justify-content-lg-start justify-content-center"> <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  fill="currentColor"
                  className="bi bi-arrow-up-right text-green-600 my-xl-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg></p>

                <p className="fw-medium">Maecenas Faucibus</p>
                <p className="text-gray-500">
                  Cras justo odio, dapibus ut facilisis in, egestas eget quam.
                  Nullam id dolor praesent commodo.
                </p>
                <p className="flex justify-content-lg-start justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-layers text-green-600 mb-xl-3 mt-xl-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0zM8 9.433 1.562 6 8 2.567 14.438 6z" />
                  </svg>
                </p>
                <p className="fw-medium">Etiam Porta Sem</p>
                <p className="text-gray-500 border-bottom pb-xl-5 ">
                  Integer posuere erat a ante venenatis dapibus posuere velit
                  aliquet morbi leo risus porta.
                </p>
                <ul className="list-disc text-green-500">
                  <li>
                    <span className="text-gray-500">
                      Donec ullamcorper nulla non metus auctor fringilla
                      vestibulum.
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-500">
                      Cras mattis consectetur purus sit amet fermentum aenean.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
