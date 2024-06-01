"use client"

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { vendorDetails } from '@/utils/contexts';


// async function getVendorData() {
//     try{
//         const response = await fetch('http://localhost:3000/vendor');
//       const data = await response.json();
//       return (data)
//     }
//     catch(error){
// console.log(error)
//     }}


function Vendor() {
    
    // const { data: Data} = useQuery({
    //     queryKey: ['photos'],
    //     queryFn: getVendorData,
        
    //   });

 

  return (
    <section className="vendor" id="vendor">
    <div className="title">
        <h1><span>F</span>eatured <span>V</span>endor</h1>
    </div>
    <div className="vendor-list">
    {vendorDetails.map((data)=>(<div className="vendor-row">
        
       <div className="rate">&nbsp;{data?.rating }
            <i  aria-hidden="true">
                <FontAwesomeIcon icon ={faStar}/></i></div>
            <img src={`${data?.icon}`} alt="img" />
            <h2>{data.name}</h2>
            <p>{data?.catogery}</p>
            <h3>{data?.price}</h3>
        </div>))}
        </div>
        </section>
  )
}

export default Vendor