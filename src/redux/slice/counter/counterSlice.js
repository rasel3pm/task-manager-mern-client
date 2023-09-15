import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },

    reducers:{
        incriment:(state)=>{
            state.value +=1
        },
        decriment:(state)=>{
            state.value -=1
        },
        reset:(state)=>{
            state.value=state=0
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    }
})
export const {incriment,decriment,incrementByAmount,reset} = counterSlice.actions
export default counterSlice.reducer