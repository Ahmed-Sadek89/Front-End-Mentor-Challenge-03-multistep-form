import React from 'react'

type propType = {
    labelName: string,
    inputType: string,
    inputPlaceHolder: string
}
const Input = ({ labelName, inputType, inputPlaceHolder }: propType) => {
    // dont forget ((inputValue)) prop
  return (
    <div className="info-form-control">
        <div className="info-form-control-guides">
        <label>{labelName}</label>
        <span>This field is required</span>
        </div>
        <input type={inputType} placeholder={inputPlaceHolder}/>
    </div>
  )
}

export default Input