import { add_ons, billing } from '../../Context/Reducer/types'

type propTypes = {
    Add_onsTitle: string, 
    Add_onsParagraph: string,
    Add_onsPriceMonthly: string,
    Add_onsPriceYearly: string,
    billing: billing
    add_ons: add_ons[]
    handleChecked: (e: React.ChangeEvent<HTMLInputElement>, price: string) => void,
}
const AddOnsType = ({
    Add_onsTitle, 
    Add_onsParagraph, 
    Add_onsPriceMonthly,
    Add_onsPriceYearly,
    billing,
    add_ons,
    handleChecked,
}: propTypes) => {
  let isChecked = add_ons.find(i => i.add_onsName === Add_onsTitle) ? true : false
  return (
    <div 
    className={`add_ons-types-items ${isChecked ? 'add_ons-selected': ''}`}>
        <div className="add_ons-types-items-left">
            <input 
                type='checkbox' 
                value={Add_onsTitle} 
                name={Add_onsTitle} 
                checked={isChecked? true: false}
                onChange={(e) => handleChecked(
                    e, 
                    billing === 'monthly' ? Add_onsPriceMonthly: Add_onsPriceYearly
                )} 
            />
            <div className="add_ons-types-items-left-info">
                <h5>{Add_onsTitle}</h5>
                <p>{Add_onsParagraph}</p>
            </div>
        </div>
        <div className="add_ons-types-items-right">
            {
                billing === 'monthly' && <span>+${Add_onsPriceMonthly}/mo</span>
            }
            {
                billing === 'yearly' && <span>+${Add_onsPriceYearly}/yr</span>
            }
        </div>
    </div>
  )
}

export default AddOnsType