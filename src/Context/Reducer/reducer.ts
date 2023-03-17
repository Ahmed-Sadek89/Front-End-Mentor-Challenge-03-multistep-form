import { reducerAction, reducerState } from '../types'
import { Types } from './types'

export const reducer = (state: reducerState, action: reducerAction): reducerState => {
  switch
   (action.type) {
    case Types.USERNAME: 
      return {
        ...state,
        username: action.payload
      }

      case Types.EMAIL: 
        return {
          ...state,
          email: action.payload
        }

      case Types.PHONE: 
        return {
          ...state,
          phone: action.payload
        }

      case Types.BILLING: 
        return {
          ...state,
          billing: action.payload
        }

      case Types.PLAN: 
        return {
          ...state,
          plan: {
            planName: action.payload.planName,
            planPrice: action.payload.planPrice
          }
        }

      case Types.ADD_ONS:  
        return {
          ...state,
          add_ons: action.payload
        }

      default: return state
  }
}

