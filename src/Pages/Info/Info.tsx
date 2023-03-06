import { useNavigate } from 'react-router-dom'
import PageHAndP from '../../Components/PageHAndP/PageHAndP'
import Input from './Input'

const Info = () => {
  const navigate = useNavigate()
  const InfoSubmit = () => {
    navigate("/plan")
  }
  return (
  <div className='info'>
    <PageHAndP
      h1="Personal info"
      p="Please provide your name, email address, and phone number."
    />
    <div className='info-form'>
      <Input labelName="Name" inputType="text" inputPlaceHolder='e.g. Stephen King' />
      <Input labelName="Email Address" inputType="email" inputPlaceHolder='e.g. stephenking@lorem.com' />
      <Input labelName="Phone Number" inputType="number" inputPlaceHolder='e.g. +1 234 567 890' />
    </div>

    <div className="info-submit">
      <button onClick={InfoSubmit} className='btn-next'>Next Step</button>
    </div>
  </div>
  )
}

export default Info