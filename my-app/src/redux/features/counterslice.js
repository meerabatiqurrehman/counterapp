import { createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
        if(state.value > 0){
            state.value -= 1;
        }
        else{
            state.value=0; 
        }
      
    },
    incrementamount: (state, action) => {
      state.value = state.value + action.payload
    }
  }
});

export const {increment, decrement, incrementamount} = counterslice.actions
export default counterslice.reducer; 