import { PlansState } from '../models/';
import { AuthState } from './features/auth/auth.slice';

export interface RootState {
    plansState: PlansState,
    authState: AuthState
}