import React, { useEffect, useState } from 'react'

const Headermain = () => {
    let [scroll,setscroll]=useState(false);
    useEffect(()=>
    {
        let upscroll=()=>
        {
            setscroll(window.scrollY > 50)
        };
        window.addEventListener("scroll",upscroll);
        return()=>
        {
            window.removeEventListener("scroll",upscroll);
        };
    },[]);
  return (
    <div>
        < div className= {`container-fluid headermain ${scroll? "active" : ""}`}>
         <div className="container p-4 mb-xl-5">
        <div className="row z-20 align-items-center gy-3">
            <div className="col-12 col-lg-2 col-md-12 text-lg-start text-center">
                <p className='text-white fw-medium text-4xl font-medium'>Starda</p>
            </div>
            <div className="col-12 col-lg-7 col-md-12 text-lg-start text-center">
                <ul className='d-flex justify-between flex-lg-row flex-column align-items-center text-center ps-0'>
                    <li><a href="" className='text-decoration-none text-white fs-6 fw-medium hover:border-b-2 hover:border-b-green-700'>Home</a></li>
                    <li><a href="" className='text-decoration-none text-white fs-6 fw-medium hover:border-b-2  hover:border-b-green-700'>About</a></li>
                    <li><a href="" className='text-decoration-none text-white fs-6 fw-medium hover:border-b-2  hover:border-b-green-700'>Services</a></li>
                    <li><a href="" className='text-decoration-none text-white fs-6 fw-medium hover:border-b-2  hover:border-b-green-700'>Portfolio</a></li>
                    <li><a href="" className='text-decoration-none text-white fs-6 fw-medium hover:border-b-2  hover:border-b-green-700'>Pricing</a></li>
                    <li><a href="" className='text-decoration-none text-white fs-6 fw-medium hover:border-b-2  hover:border-b-green-700'>Contact</a></li>
                </ul>
            </div>
            <div className="col-12 col-lg-3 col-md-12 text-lg-end text-center">
                <a href="" className='text-decoration-none text-white bg-green-600 p-2 rounded-2'> Get Started</a>
            </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Headermain
