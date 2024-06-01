import Link from 'next/link'
import React from 'react'


function Home() {
  return (
  
    <section className="home" id="">
     <form action="#">
            <div className="search-box">
                <h1>Your Wedding,Your Way</h1>
                <p>Find the best wedding vendors with thousands of trusted reviews</p>
                <select  className="search-field">
            <option disabled selected>Select vendor type</option>
            <option value="Wedding Venues">Wedding Venues</option>
            <option value="Family makeup">Family makeup</option>
            <option value="bridal makeup">Bridal Makeup</option>
            <option value="Groom Wear">Groom Wear</option>
            <option value="Wedding Decoration">Wedding decoration</option>
        </select>
        <select  className="search-field">
            <option disabled selected>City</option>
            <option value="Anand">Anand</option>
            <option value="Ahemdabad">Ahemdabad</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Baroda">Baroda</option>
            <option value="Goa">Goa</option>
        </select>
                <button className="btn">Search</button>
            </div>
            
        

            </form>
            </section>
      
     
  )
}

export default Home