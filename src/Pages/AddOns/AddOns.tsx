import {useContext, useEffect, useState} from 'react'
import PageHAndP from '../../Components/PageHAndP/PageHAndP'
import AddOnsType from './AddOnsType'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../Context/Context'
import { Types } from '../../Context/Reducer/types'

const AddOns = () => {
  const navigate = useNavigate()
  const [ hasAddOns, sethasAddOns ] = useState<boolean>(true);
  const { state, dispatch } = useContext(DataContext)

  useEffect(() => {
    if (state.plan.planName === ''){
      navigate('/plan')
    }
  }, [dispatch, navigate, state])
  
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, price: string) => {
    e.target.checked === true ? dispatch({
      type: Types.ADD_ONS,
      payload: 
        state.add_ons.find(i => i.add_onsName === e.target.value) ? 
        [...state.add_ons] :
        [
          ...state.add_ons,
          {
            add_onsName: e.target.value,
            add_onsPrice: price
          }
        ]
      
    })
    : dispatch({
      type: Types.ADD_ONS,
      payload: [...state.add_ons.filter(i => i.add_onsName !== e.target.name)] 
    })
  }

  const handlePrev = () => {
    navigate('/plan')
  }
  
  const handleNext = () => {
    if(state.add_ons.length === 0) {
      sethasAddOns(false)
    } else {
      sethasAddOns(true)
      navigate('/summary')
    }
  }
  return (
    <div className='add_ons'>
      <PageHAndP
        h1="Pick add-ons"
        p="Add-ons help enhance your gaming experience."
      />

      
        <div className="add_ons-types">
          <AddOnsType
            Add_onsTitle="Online service"
            Add_onsParagraph="Access to multiplayer games"
            Add_onsPriceMonthly='1'
            Add_onsPriceYearly='10'
            billing={state.billing}
            add_ons={state.add_ons}
            handleChecked={handleChecked}
          />
          <AddOnsType
            Add_onsTitle="Larger storage"
            Add_onsParagraph="Extra 1TB of cloud save"
            Add_onsPriceMonthly='2'
            Add_onsPriceYearly='20'
            billing={state.billing}
            add_ons={state.add_ons}
            handleChecked={handleChecked}
          />
          <AddOnsType
            Add_onsTitle="Customizable Profile"
            Add_onsParagraph="Custom theme on your profile"
            Add_onsPriceMonthly='3'
            Add_onsPriceYearly='30'
            billing={state.billing}
            add_ons={state.add_ons}
            handleChecked={handleChecked}
          />
        </div>
        {
          hasAddOns === false &&
          <p className='addOnsError'>Please, choose at least one add_ons</p>
        }
      <div className="add_ons-submit">
      <button className='btn-prev' onClick={handlePrev} >Go Back</button>
      <button className='btn-next' onClick={handleNext} >Next Step</button>
    </div>
    </div>
  )
}

export default AddOns