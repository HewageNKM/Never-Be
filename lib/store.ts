import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@/lib/features/authSlice/authSlice';

export const store = configureStore({
    reducer: {
         authSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
