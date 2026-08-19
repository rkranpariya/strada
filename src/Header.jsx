import React from 'react'

const Header = () => {
  return (
    <div>
    < div className='container-fluid header-sub'>
         {/* <div className="container p-4 mb-xl-5">
        <div className="row z-20 align-items-center gy-3">
            <div className="col-12 col-lg-2 col-md-12 text-lg-start text-center">
                <p className='text-white fw-medium text-4xl font-medium'>Starda</p>
            </div>
            <div className="col-12 col-lg-7 col-md-12 text-lg-start text-center">
                <ul className='d-flex justify-between flex-lg-nowrap flex-wrap'>
                    <li><a href="" className='text-decoration-none text-white fs-6 fw-medium'>Home</a></li>
                    <li><a href="" className='text-decoration-none text-white fs-6 fw-medium'>About</a></li>
                    <li><a href="" className='text-decoration-none text-white fs-6 fw-medium'>Services</a></li>
                    <li><a href="" className='text-decoration-none text-white fs-6 fw-medium'>Portfolio</a></li>
                    <li><a href="" className='text-decoration-none text-white fs-6 fw-medium'>Pricing</a></li>
                    <li><a href="" className='text-decoration-none text-white fs-6 fw-medium'>Contact</a></li>
                </ul>
            </div>
            <div className="col-12 col-lg-3 col-md-12 text-lg-end text-center">
                <a href="" className='text-decoration-none text-white bg-green-600 p-2 rounded-2'> Get Started</a>
            </div>
        </div>

      </div> */}
      <div className="container text-white pt-xxl-5 header_sub_s">
       <div className="row">
        <div className="col-lg-6 col-12 text-lg-start text-center">
             <p className='text-green-600 text-uppercase'>limited edition</p>
        <h1>Curated Experiences Await You</h1>
        <p className='py-xl-3'>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.</p>
        <a href="" className='text-uppercase text-decoration-none text-white border-2 border-solid p-2'>View collection</a>
        </div>
       </div>
      </div>
     </div>
    </div>
  )
}

export default Header
