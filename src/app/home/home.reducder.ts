import { Action, ActionReducer } from '@ngrx/store';
import { Home } from '../../core/state/Home-state';

let homeState: Home = {
    default: "123"
}

export const homeReducer: ActionReducer<any> = (state: Home = homeState, action: Action) => {
    console.log("home reducers");
    switch (action.type) {
        case "SELECT":
            return state;
        default:
            return state;
    }

}
