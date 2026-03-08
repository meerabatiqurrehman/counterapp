import { configureStore } from '@reduxjs/toolkit';
import counterreducer from './features/counterslice';

export const store = configureStore({
  reducer: {
    counter: counterreducer
  }
});