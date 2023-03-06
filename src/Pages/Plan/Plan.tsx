import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHAndP from '../../Components/PageHAndP/PageHAndP'
import Arcade from '../../images/icon-arcade.svg'
import Advanced from '../../images/icon-advanced.svg'
import Pro from '../../images/icon-pro.svg'
import PlanType from './PlanType'

const Plan = () => {
  const navigate = useNavigate()
  const [ check, setCheck ] = useState<'monthly' | 'yearly'>('monthly');
  const [ plan, setPlan ] = useState<'arcade' | 'advanced' | 'pro' | ''>('');
  const handleCheck = () => {
    check === 'monthly' ? setCheck('yearly') : setCheck('monthly')
  }
  const handlePrev = () => {
    navigate('/')
  }
  const handleNext = () => {
    navigate('/add_ons')
  }
  
  return (
  <div className='plan'>
    <PageHAndP
      h1="Select your plan"
      p="You have the option of monthly or yearly billing."
    />
    <div className='plan-layout'>
      <div className='plan-layout-type'>
        <PlanType
          plan={plan} setPlan={setPlan}
          planImg={Arcade} planTitle='arcade'
          check={check}
          planeMonthlyPrice='9' PlanYearlyPrice='90'
        />
        <PlanType
          plan={plan} setPlan={setPlan}
          planImg={Advanced} planTitle='advanced'
          check={check}
          planeMonthlyPrice='12' PlanYearlyPrice='120'
        />
        <PlanType
          plan={plan} setPlan={setPlan}
          planImg={Pro} planTitle='pro'
          check={check}
          planeMonthlyPrice='12'PlanYearlyPrice='120'
        />
      </div>
      <div className='plan-layout-duration'>
        <span 
        className={check === 'monthly' ? 'plan-layout-duration-selected' : 'plan-layout-duration-unselected'}
        >Monthly</span>
        <div onClick={handleCheck} className={check}>
          <button></button>
        </div>
        <span className={check === 'yearly' ? 'plan-layout-duration-selected' : 'plan-layout-duration-unselected'}
        >Yearly</span>
      </div>
    </div>
    <div className="plan-submit">
      <button className='btn-prev' onClick={handlePrev} >Go Back</button>
      <button className='btn-next' onClick={handleNext} >Next Step</button>
    </div>
  </div>
  )
}

export default Plan