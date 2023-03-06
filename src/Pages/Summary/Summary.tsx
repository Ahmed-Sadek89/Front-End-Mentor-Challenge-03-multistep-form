import React from 'react'
import PageHAndP from '../../Components/PageHAndP/PageHAndP'
import { useNavigate } from 'react-router-dom'

const Summary = () => {
  const navigate = useNavigate()
  const handlePrev = () => {
    navigate('/add_ons')
  }
  const handleConfirm = () => {
    navigate('/summary/thanks')
  }
  return (
    <div className='summary'>
      <PageHAndP
        h1="Finishing up"
        p="Double-check everything looks OK before confirming."
      />
      <div className='summary-layout'>
        <div className="summary-layout-content">
          <div className="summary-layout-content-plan">
            <div className="summary-layout-content-plan-left">
              <h2>Arcade(Yearly)</h2>
              <button>Change</button>
            </div>
            <div className="summary-layout-content-plan-right">
              <h2>$90/yr</h2>
            </div>
          </div>
          <hr />
          <div className="summary-layout-content-add_ons">
            <h3>Online services</h3>
            <p>+$10/yr</p>
          </div>
          <div className="summary-layout-content-add_ons">
            <h3>Larger storage</h3>
            <p>+$20/yr</p>
          </div>
        </div>
        <div className="summary-layout-total">
          <p>Total(per year)</p>
          <h1>$120/yr</h1>
        </div>
      </div>
      <div className="summary-submit">
        <button className='btn-prev' onClick={handlePrev} >Go Back</button>
        <button className='btn-confirm' onClick={handleConfirm} >Confirm</button>
      </div>
  </div>
  )
}

export default Summary