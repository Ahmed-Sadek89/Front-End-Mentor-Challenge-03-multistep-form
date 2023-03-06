import {useState} from 'react'
import PageHAndP from '../../Components/PageHAndP/PageHAndP'
import Add_onsType from './Add_onsType'
import { useNavigate } from 'react-router-dom'

type add_onsTypes = {
  add_onsName: string, 
  add_onsPrice: string
}
const Add_ons = () => {
  const navigate = useNavigate()
  const [ add_ons, setAdd_ons ] = useState<add_onsTypes[]>([]);
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, price: string) => {
    e.target.checked === true ? setAdd_ons(prev => {
      return [...prev, {
        add_onsName: e.target.name,
        add_onsPrice: price
      }]
    })
    : setAdd_ons(prev => {
      return [...prev.filter(i => i.add_onsName !== e.target.name)] 
    })
  }
  const handlePrev = () => {
    navigate('/plan')
  }
  const handleNext = () => {
    navigate('/summary')
  }
  return (
    <div className='add_ons'>
      <PageHAndP
        h1="Pick add-ons"
        p="Add-ons help enhance your gaming experience."
      />

      
        <div className="add_ons-types">
          <Add_onsType
            Add_onsTitle="Online service"
            Add_onsParagraph="Access to multiplayer games"
            Add_onsPrice='1'
            add_ons={add_ons}
            handleChecked={handleChecked}
          />
          <Add_onsType
            Add_onsTitle="Larger storage"
            Add_onsParagraph="Extra 1TB of cloud save"
            Add_onsPrice='2'
            add_ons={add_ons}
            handleChecked={handleChecked}
          />
          <Add_onsType
            Add_onsTitle="Customizable Profile"
            Add_onsParagraph="Custom theme on your profile"
            Add_onsPrice='3'
            add_ons={add_ons}
            handleChecked={handleChecked}
          />
        </div>

      <div className="add_ons-submit">
      <button className='btn-prev' onClick={handlePrev} >Go Back</button>
      <button className='btn-next' onClick={handleNext} >Next Step</button>
    </div>
    </div>
  )
}

export default Add_ons