import React from 'react'


type add_onsTypes = {
    add_onsName: string, add_onsPrice: string
}

type propTypes = {
    Add_onsTitle: string, 
    Add_onsParagraph: string,
    Add_onsPrice: string,
    add_ons: add_onsTypes[]
    handleChecked: (e: React.ChangeEvent<HTMLInputElement>, price: string) => void
}
const Add_onsType = ({
    Add_onsTitle, Add_onsParagraph, Add_onsPrice,
    add_ons,
    handleChecked

}: propTypes) => {
  let isChecked = add_ons.find(i => i.add_onsName === Add_onsTitle)
  return (
    <div 
    className={`add_ons-types-items ${isChecked ? 'add_ons-selected': ''}`}>
        <div className="add_ons-types-items-left">
            <input 
                type='checkbox' 
                value={Add_onsTitle} 
                name={Add_onsTitle} 
                onChange={(e) => handleChecked(e, Add_onsPrice)} 
            />
            <div className="add_ons-types-items-left-info">
                <h5>{Add_onsTitle}</h5>
                <p>{Add_onsParagraph}</p>
            </div>
        </div>
        <div className="add_ons-types-items-right">
            <span>+${Add_onsPrice}/mo</span>
            {/* <span>+${Add_onsPrice}0/yr</span> */}
        </div>
    </div>
  )
}

export default Add_onsType