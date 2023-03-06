import React from 'react'
import Thank from '../../images/icon-thank-you.svg'

const Thanks = () => {
  return (
    <div className='thanks'>
        <div className="thanks-layout">
            <img src={Thank} alt="thanks" />
            <h2>Thank you!</h2>
            <p>
                Thanks for confirming your subscription! We hope you have fun 
                using our platform. If you ever need support, please feel free 
                to email us at support@loremgaming.com.
            </p>
        </div>
    </div>
  )
}

export default Thanks