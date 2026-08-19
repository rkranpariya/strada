import React, { useState } from 'react'
import { alldata } from './Productdata'

const Section6 = () => {
    let [activelink,setactivelink]=useState("all");
    let [activedata,setactivedata]=useState(alldata.flatMap((valu)=>valu.details));



    let changelink = (index) =>{
      if(index === "all")
      {
         setactivelink("all");
      setactivedata(alldata.flatMap((valu)=>valu.details));
      }
     else
     {
       setactivelink(index);
      setactivedata(alldata[index].details);
     }
 
    }
  return (
    <div>
      <div className="container my-5 text-center pt-5">
        <h2>Portfolio</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis <br />unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
      </div>
      <div className="container pb-5">
       <div className='flex justify-content-center flex-lg-nowrap flex-md-nowrap flex-wrap gap-3'>
         <a href="" className={activelink === "all" ? "text-decoration-none text-gray-900! px-4 border-b-2 border-green-800 pb-2":"text-decoration-none text-gray-500!  px-4"} onClick={(e)=>{e.preventDefault(); changelink("all")}}
         >All</a>
        
        {alldata.map((valu,inde)=>{
            return(
                <div>
                    <a href="" className={activelink === inde ? "text-decoration-none text-gray-900! px-4 border-b-2 border-green-800 pb-2 w-75":"text-decoration-none text-gray-500!  px-4"} 
                    onClick={(e) => {e.preventDefault(); changelink(inde)}}>{valu.title}</a>
                </div>
            )
        })}
       </div>
       <div className='row py-5'>
            {activedata.map((valu,inde)=>
        {
          return(
              <div className="col-lg-4 col-md-6 col-12 lh-1 mb-3 animate-bounce]">
               
                  <img src={valu.img} alt="" />
                  <p className='pt-2 text-gray-500 text-uppercase'>{valu.title_sub}</p>
                  <p className='fw-medium text-xl'>{valu.title}</p>
                  <p className='text-gray-500'>{valu.details}</p>
                
          </div>
            )
        })}
       </div>
      </div>
    </div>
  )
}

export default Section6
