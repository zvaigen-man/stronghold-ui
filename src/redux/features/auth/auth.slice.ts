import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Auth } from '../../../models';


export interface AuthState {
    selectedAuth?: Auth,
}

const initialState: AuthState = {};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSelectedAuth(state, action: PayloadAction<Auth>) {
            state.selectedAuth = { ...action.payload };
        }
    }
});

export const { setSelectedAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;