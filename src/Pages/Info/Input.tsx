import React from 'react'

type propType = {
    labelName: string,
    inputType: string,
    inputPlaceHolder: string,
    isFilled: boolean
    value: string,
    setValue: (value: string) => void
}

const Input = ({ 
  labelName, 
  inputType, 
  inputPlaceHolder,
  isFilled, 
  value, 
  setValue 
}: propType) => {
  return (
    <div className="info-form-control">
        <div className="info-form-control-guides">
        <label>{labelName}</label>
        { isFilled === false && <span>This field is required</span> }
        </div>
        <input 
          type={inputType} 
          placeholder={inputPlaceHolder} 
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={isFilled === false ? 'errorInput': ''}
        />
    </div>
  )
}

export default Input