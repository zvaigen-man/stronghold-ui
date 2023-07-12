import { configureStore as rtkConfigureStore } from '@reduxjs/toolkit';
import  'redux-devtools-extension';
import { RootReducer } from './root-reducer';
import thunk from 'redux-thunk';
import { useDispatch } from 'react-redux';

/**
 * defined so it could be referenced as AppStore, 
 * to fully support typed store - supporting thunk type
 * @see official-example https://redux-toolkit.js.org/api/configureStore#full-example
 * @see typescript-practice https://redux-toolkit.js.org/tutorials/typescript#define-root-state-and-dispatch-types
 */
// eslint-disable-next-line
const typedConfigureStore = () => rtkConfigureStore({
  reducer: RootReducer,
  middleware: ((getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)),
  devTools: true, // can add - process.env.NODE_ENV !== 'PROD', 
});

export type AppStore = ReturnType<typeof typedConfigureStore>;

export let store: AppStore;

export function configureStore(): AppStore {
  store = typedConfigureStore();
  return store;
}

export function getStore(): AppStore {
  return store;
}

// eslint-disable-next-line
export const useAppDispatch = () => useDispatch<AppStore['dispatch']>();

export type TypedUseAppDispatchHook = ReturnType<typeof useAppDispatch>;

// ofir

// ofir
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import { AnyAction, applyMiddleware, CombinedState, createStore, Store, ThunkDispatch } from '@reduxjs/toolkit';
// import { createBrowserHistory } from 'history';
// import { useDispatch } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunkMiddleware from 'redux-thunk';
// import { RootReducer } from './root-reducer';
// import { RootState } from './root-state';
// import {loaderMiddleware} from './middlewares/loader.middleware';

// export type AppStore = ReturnType<typeof configureStore>;
// export let store: AppStore;
// export const history = createBrowserHistory();

// export function configureStore(): Store<RootState> {
//   const composeFunction = composeWithDevTools({ name: 'C3 Console' });

//   const reducers = (state: CombinedState<RootState> | undefined, action: AnyAction) => {
//     if (action.type && action.type === 'RESET') {
//       return action.payload;
//     }
//     return RootReducer(state, action);
//   };

//   store = createStore(reducers, {}, composeFunction(applyMiddleware(thunkMiddleware, loaderMiddleware)));

//   return store;
// }

// export function getStore(): AppStore {
//   if (store) return store;
//   return configureStore();
// }

// export const useAppDispatch = () => useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

// export type TypedUseAppDispatchHook = ReturnType<typeof useAppDispatch>;
