import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHAndP from '../../Components/PageHAndP/PageHAndP'
import Input from './Input'
import { DataContext } from '../../Context/Context'
import { Types } from '../../Context/Reducer/types'

const Info = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(DataContext);
  const [ checkInputs, setCheckInputs ] = useState({
    username: true,
    email: true,
    phone: true
  })
  
  const checkInputValidation = ( 
    inputValue: string, 
    inputError: {}, 
    inputSuccess: {} 
  ): void => {
    if ( inputValue === '' ) {
      setCheckInputs(prev => {
        return{
          ...prev,
          ...inputError
        }
      })
    } else {
      setCheckInputs(prev => {
        return{
          ...prev,
          ...inputSuccess
        }
      })
    }
  }

  const InfoSubmit = () => {
    // check username
    checkInputValidation( state.username, {username: false}, { username: true} )
    // check email
    checkInputValidation( state.email, { email: false }, { email: true } )
    // check phone
    checkInputValidation( state.phone, { phone: false }, { phone: true } )
    
    if ( state.username !== '' && state.email !== '' && state.phone !== '' ) {
      navigate("/plan")
    }
  }
  return (
  <div className='info'>
    <PageHAndP
      h1="Personal info"
      p="Please provide your name, email address, and phone number."
    />
    <div className='info-form'>
      <Input 
        labelName="Name" 
        inputType="text" 
        inputPlaceHolder='e.g. Stephen King' 
        isFilled={checkInputs.username}
        value={state.username}
        setValue={(value: string) => dispatch({
          type: Types.USERNAME,
          payload: value
        })}
      />
      <Input 
        labelName="Email Address" 
        inputType="email" 
        inputPlaceHolder='e.g. stephenking@lorem.com' 
        isFilled={checkInputs.email}
        value={state.email}
        setValue={(value: string) => dispatch({
          type: Types.EMAIL,
          payload: value
        })}
      />
      <Input
        labelName="Phone Number"
        inputType="number" 
        inputPlaceHolder='e.g. +1 234 567 890' 
        isFilled={checkInputs.phone}
        value={state.phone}
        setValue={(value: string) => dispatch({
          type: Types.PHONE,
          payload: value
        })}
      />
    </div>

    <div className="info-submit">
      <button onClick={InfoSubmit} className='btn-next'>Next Step</button>
    </div>
  </div>
  )
}

export default Info