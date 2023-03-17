import { Types, add_ons, billing, plan } from "./Reducer/types"

export type reducerState = {
    username: string,
    email: string,
    phone: string,
    billing: billing,
    plan: plan,
    add_ons: add_ons[]
}

export type reducerAction = 
{ type: Types.USERNAME, payload: string }
| { type: Types.EMAIL, payload: string }
| { type: Types.PHONE, payload: string }
| { type: Types.BILLING, payload: 'monthly' | 'yearly' }
| { type: Types.PLAN, payload: plan }
| { type: Types.ADD_ONS, payload: add_ons[]}
