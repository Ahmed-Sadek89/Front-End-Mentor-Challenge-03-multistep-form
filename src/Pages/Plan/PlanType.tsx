import {useContext} from 'react'
import { plan } from '../../Context/Reducer/types'
import { DataContext } from '../../Context/Context'

type propTypes = {
    plan: plan, 
    setPlan: (val1: string, val2: string) => void,
    planImg: string, 
    planTitle: "" | "arcade" | "advanced" | "pro",
    check: "monthly" | "yearly",
    planeMonthlyPrice: string,
    PlanYearlyPrice: string,
}
const PlanType = ({
    plan, setPlan, planImg, planTitle, check,  planeMonthlyPrice, PlanYearlyPrice
}: propTypes) => {
    const { state } = useContext(DataContext)
  return (
    <div 
        className={`plan-layout-type-item ${plan.planName === planTitle && 'plan-selected'}`} 
        onClick={() => setPlan(planTitle, state.billing === 'monthly' ? planeMonthlyPrice : PlanYearlyPrice)}
    >
        <img src={planImg} alt={planTitle} />
        <div className='plan-layout-type-item-info'>
        <h5>{planTitle}</h5>
        { check === 'monthly' && <span>${planeMonthlyPrice}/mo</span> }
        { 
            check === 'yearly' && <>
                <span>${PlanYearlyPrice}/yr</span> 
                <span>2 months free</span>
            </>
        }
        </div>
    </div>
  )
}

export default PlanType