import { useContext, useEffect } from 'react'
import PageHAndP from '../../Components/PageHAndP/PageHAndP'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../Context/Context'
import { Types } from '../../Context/Reducer/types'

const Summary = () => {
  const navigate = useNavigate()
  const handlePrev = () => {
    navigate('/add_ons')
  }
  const handleConfirm = () => {
    navigate('/summary/thanks')
  }
  const { state, dispatch } = useContext(DataContext);
  useEffect(() => {
    if ( state.add_ons.length === 0 ){
      navigate('/add_ons')
    }
  }, [dispatch, navigate, state])

  let totalAdd_ons = state.add_ons.reduce((curr, acc) => {
    return curr + parseInt(acc.add_onsPrice)
  }, 0)

  let total = totalAdd_ons + parseInt(state.plan.planPrice)

  const handleChange = () => {
    dispatch({
      type: Types.BILLING,
      payload: state.billing === 'monthly' ? 'yearly' : 'monthly'
    })

    dispatch({
      type: Types.PLAN,
      payload: state.billing === 'monthly' ? 
        {...state.plan, planPrice: (parseInt(state.plan.planPrice) * 10).toString()} : 
        {...state.plan, planPrice: (parseInt(state.plan.planPrice) / 10).toString()}
    })
    
    dispatch({
      type: Types.ADD_ONS,
      payload: state.billing === 'monthly' ? 
      state.add_ons.map((index)=> {
        index.add_onsPrice = (parseInt(index.add_onsPrice) * 10).toString()
        return index
      }) : 
      state.add_ons.map((index)=> {
        index.add_onsPrice = (parseInt(index.add_onsPrice) / 10).toString()
        return index
      })
    })
    
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
              <h2>{state.plan.planName} ({state.billing})</h2>
              <button onClick={() => handleChange()}>Change</button>
            </div>
            <div className="summary-layout-content-plan-right">
              <h2>${state.plan.planPrice}/{state.billing === 'monthly' ? 'mo' : 'yr'}</h2>
            </div>
          </div>
          <hr />
          {
            state.add_ons.map((index) => (
              <div className="summary-layout-content-add_ons" key={index.add_onsName}>
                <h3>{index.add_onsName}</h3>
                <p>+${index.add_onsPrice}/{state.billing === 'monthly' ? 'mo' : 'yr'}</p>
              </div>
            ))
          }
        </div>
        <div className="summary-layout-total">
          <p>Total(per {state.billing === 'monthly' ? 'month' : 'year'})</p>
          <h1>${total}/{state.billing === 'monthly' ? 'mo' : 'yr'}</h1>
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