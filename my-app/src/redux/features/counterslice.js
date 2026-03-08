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
      
    }
  }
});

export const {increment, decrement} = counterslice.actions
export default counterslice.reducer; 