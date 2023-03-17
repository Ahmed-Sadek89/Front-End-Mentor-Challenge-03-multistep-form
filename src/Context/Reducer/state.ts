import { reducerState } from "../types";

export const initialState: reducerState = {
    username: '',
    email: '',
    phone: '',
    billing: 'monthly',
    plan: {
      planName: '',
      planPrice: ''
    },
    add_ons: []
  }