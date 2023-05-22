import React from 'react'
import "./Footer.css"
import logo from "../Assets/header_logo.png"

export default function Footer() {
  return (
    <div className='main_footer'>
<div className="container">

<div className="row">
    <div className="col-md-4 text-start">
        <img src={logo} className='w-50' alt="" />
    </div>
    <div className="col-md-4">
    <div className="content">       <h5><em>Put your freight on the “Fast Lane”!</em></h5>
        <p>Useful links - Resource page</p>
        <h2>Location</h2>
        <p>Fast Lane Freight Services Inc. <br />
105 Transport Rd. <br />    
Sunnyside, MB R5R 0J8</p>
</div>
 
    </div>

    <div className="col-md-4">
    <div className="content">
        <h1>Get in Touch</h1>
        <p>We are ready to answer your call 24/7!</p>
        <p>Phone: 204-654-4000</p>
        <p>Toll-Free: 866-686-8693</p>
        <p>Fax: 204-654-3375</p>
        <p>info@fastlanefreight.ca</p>
        </div>
    </div>
    </div>
</div>

    </div>
  )
}
