import React from 'react'
import {MdFireTruck} from "react-icons/md"
import {FaTruckMoving} from "react-icons/fa"
import {SiVlcmediaplayer} from "react-icons/si"
import "./Content.css"

export default function Content() {
  return (
    <div className='main_content_here'>
    <div className="container py-5">
    <div className="row">
        <div className="col-md-6">
        <p>Fast Lane Freight Services is proud to be a family-oriented company based near Winnipeg, MB providing safe and efficient trucking service across Canada and into the US.</p>
       
        We are primarily an open deck carrier consisting of flat decks and step decks. With the experience to service loads that consists of many different commodities in wide array of sizes and weights.
      
      
        <h2 className='py-3'><strong>SERVICES PROVIDED:</strong></h2>
        <ul className='ps-0'>
<li>Certified Flat Deck and Step Deck Trucking</li>
<li>Tri-axles + tandem axle trailers available</li>
<li>Specializing in over-dimensional freight services</li>
<li>Providing full truckload and less-than-load (LTL) freight movements</li>
<li>Winter road services to Northern communities</li>
<li>Transloading commodities in our yard</li>
<li>Highly experienced in safely securing loads</li>
<li>Certified satellite tracking of your freight</li>
</ul>
        
        </div>


        <div className="col-md-6">
        <div className="yeellow">
        <h5>Now Hiring Drivers</h5>
        <button className='home_btn text-white'>Join Our Team</button>

        </div>
        <div className="white_box mt-4">
        <h5>Click here for a “fast lane” quote on your next freight transportation needs</h5>
        <button className='home_btn text-white'>GET A Quote</button>

        </div>
        </div>
        </div>

    </div>



{/* three boxes are here  */}

    <div className="container py-5">
    <div className="row">

 
        <div className="col-md-4 mt-3 mt-md-0   ">
            <div className="main_card">
            <SiVlcmediaplayer className='icon_card'/>
            <p className='card_content'>Pilot Car or Escort Vehicles</p>

            </div>
        </div>
        <div className="col-md-4 mt-3 mt-md-0   ">
            <div className="main_card">
            <FaTruckMoving className='icon_card'/>
            <p className='card_content'>Pilot Car or Escort Vehicles</p>

            </div>
        </div>
        <div className="col-md-4 mt-3 mt-md-0   ">
            <div className="main_card">
            <MdFireTruck className='icon_card'/>
            <p className='card_content'>Pilot Car or Escort Vehicles</p>

            </div>
        </div>
        </div>
    </div>



    </div>
  )
}
