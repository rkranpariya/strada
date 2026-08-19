import React, { useState } from 'react'
import { questiondata } from './Productdata'

const Section8 = () => {
    let [checkindex,setcheckindex]=useState(0);
    let [checkdata,setcheckdata]=useState(questiondata[0].details);
    let changeTab=(inde)=>
{
    setcheckindex(inde);
    setcheckdata(questiondata[inde].details);
}
    

  return (
    <div>
      <div className='container p-5'>
        <p className='text-center text-5xl! fw-light' >Frequently Asked Questions</p>
        <p className='text-center text-gray-500!'>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis <br /> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam
        </p>
        <div className="row">
            <div className="col-lg-3 col-12 h-50">
                {questiondata.map((valu,inde)=>
                {
                    return(
                        <div className='my-4'>
                            <a href="" className={checkindex === inde ? " text-decoration-none text-green-400! fw-medium border-l-2 border-l-green-500! px-2":
                                'text-decoration-none text-gray-400! fw-medium border-l-2 border-l-gray-700 px-2'} onClick={(e)=>{e.preventDefault(), changeTab(inde)}}>{valu.title}</a>
                        </div>
                    )
                })
                }
            </div>
            <div className="col-lg-9 col-12 h-100">
                {
                    checkdata.map((valu,inde)=>{
                        return(
                            <div className='mt-4 border-t-2 border-t-gray-200  flex flex-column py-3 text-gray-500!'>
                                <p className='border-b-2 border-b-gray-300 justify-content-center pb-3'>{valu.quest1}</p>
                                <p className='border-b-2 border-b-gray-300 pb-3'>{valu.quest2}</p>
                                <p className='border-b-2 border-b-gray-300 pb-3'>{valu.quest3}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <p className='text-center mt-5 text-gray-500'>Can't find what you're looking for?</p>
      </div>
    </div>
  )
}

export default Section8
