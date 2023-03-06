import React from 'react'

type propTypes = {
    plan: "" | "arcade" | "advanced" | "pro", 
    setPlan: React.Dispatch<React.SetStateAction<"" | "arcade" | "advanced" | "pro">>,
    planImg: string, 
    planTitle: "" | "arcade" | "advanced" | "pro",
    check: "monthly" | "yearly",
    planeMonthlyPrice: string,
    PlanYearlyPrice: string,
}
const PlanType = ({
    plan, setPlan, planImg, planTitle, check,  planeMonthlyPrice, PlanYearlyPrice
}: propTypes) => {
  return (
    <div 
        className={`plan-layout-type-item ${plan === planTitle && 'plan-selected'}`} 
        onClick={() => setPlan(planTitle)}
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