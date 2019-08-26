import { ActionReducerMap } from '@ngrx/store';
import { homeReducer } from '../../app/home/home.reducder';


//Create Key for Managing redcuers
export interface IAppState {
    Home: any;
}


//Combined Reducers for all components
export const StoreReducers: ActionReducerMap<IAppState> = {
    Home: homeReducer
}