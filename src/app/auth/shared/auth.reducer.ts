import { ActionReducer, Action } from '@ngrx/store';
import * as _ from 'lodash';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface AuthState {
    user: any,
    type: boolean;
}


const initialState: AuthState = {
    user: {},
    type: false
}


export function AuthReducer(state: AuthState = initialState, action: Action) {


    switch (action.type) {
        case LOGIN:
            var user = action.payload;
            return _.assign({}, state, {
                user: action.payload,
                type: true
            });

        case LOGOUT:

            return _.assign({}, state, {
                user: null
            });
    }
}