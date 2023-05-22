import React from 'react'
import OtpForm from 'react-otp-ui'


const Otp_form = () => {
  const handleOnChange = (data) => {
    console.log('data', data)
    
    /* data object like this {digit: '1', digit2: '2', digit3: '3', digit4: '4', otpValue: '1234'} */
  }
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-lg-6 border rounded-3 bg-light">
          <h2 className="text-danger py-4">Registration form</h2>
          <h6 className='mt-2'>Email verification</h6>

          <div className="otp_uper mt-4 d-flex justify-content-center ">
          <OtpForm onChange={handleOnChange} numberOfInputs={6} secureInput/>
          </div>
          <button className='btn btn-md btn-primary my-4'>Verify</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Otp_form
