import { combineReducers } from '@reduxjs/toolkit';
import { RootState } from './root-state';
import { plansReducer } from './features/plans/plans.slice';
import { authReducer } from './features/auth/auth.slice';

export const RootReducer = combineReducers<RootState>({
    authState: authReducer,
    plansState: plansReducer,
});