import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHAndP from '../../Components/PageHAndP/PageHAndP'
import Arcade from '../../images/icon-arcade.svg'
import Advanced from '../../images/icon-advanced.svg'
import Pro from '../../images/icon-pro.svg'
import PlanType from './PlanType'
import { DataContext } from '../../Context/Context'
import { Types } from '../../Context/Reducer/types'

const Plan = () => {
  const navigate = useNavigate()

  const {state, dispatch} = useContext(DataContext)

  useEffect(() => {
    if (state.username === '' || state.email === '' || state.phone === ''){
      navigate('/')
    }
  }, [dispatch, navigate, state])

  const handleCheck = () => {
    state.billing === 'monthly' ? 
    dispatch({type: Types.BILLING, payload: 'yearly'}) : 
    dispatch({type: Types.BILLING, payload: 'monthly'})

    // reset the plan while changing the billing type
    dispatch({type: Types.PLAN, payload: {planName: "", planPrice: ""}})
  }

  const handlePrev = () => {
    navigate('/')
  }

  const [ hasPlan, setHasPlan ] = useState(true)

  const handleNext = () => {
    if( state.plan.planName === '' ) {
      setHasPlan(false)
    } else {
      setHasPlan(true)
      navigate('/add_ons')
    }
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
          plan={state.plan} 
          setPlan={(planName: string, planPrice: string) => dispatch({
            type: Types.PLAN, 
            payload: { planName, planPrice }
          })}
          planImg={Arcade} 
          planTitle='arcade'
          check={state.billing}
          planeMonthlyPrice='9' PlanYearlyPrice='90'
        />
        <PlanType
          plan={state.plan} 
          setPlan={(planName: string, planPrice: string) => dispatch({
            type: Types.PLAN, 
            payload: { planName, planPrice }
          })}
          planImg={Advanced} planTitle='advanced'
          check={state.billing}
          planeMonthlyPrice='12' PlanYearlyPrice='120'
        />
        <PlanType
          plan={state.plan} 
          setPlan={(planName: string, planPrice: string) => dispatch({
            type: Types.PLAN, 
            payload: { planName, planPrice }
          })}
          planImg={Pro} planTitle='pro'
          check={state.billing}
          planeMonthlyPrice='12'PlanYearlyPrice='120'
        />
      </div>
      {
        hasPlan === false && <p>Please select your plan</p>
      }
      <div className='plan-layout-duration'>
        <span 
          className={state.billing === 'monthly' ? 
            'plan-layout-duration-selected' : 
            'plan-layout-duration-unselected'
          }
        >Monthly</span>
        <div onClick={handleCheck} className={state.billing}>
          <button></button>
        </div>
        <span className={state.billing === 'yearly' ? 'plan-layout-duration-selected' : 'plan-layout-duration-unselected'}
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