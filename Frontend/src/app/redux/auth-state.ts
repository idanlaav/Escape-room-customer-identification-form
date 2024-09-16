import jwtDecode from "jwt-decode";
import { UserModel } from "../models/user-model";

export class AuthState {
    
    public token: string = null;
    public user: UserModel = null;

    public constructor() {
        this.token = localStorage.getItem("token");
        if(this.token) {
            this.user = (jwtDecode(this.token) as any).user;
        }
    }
}

export enum AuthActionType {
    Login = "Login",
    Logout = "Logout",
}

export interface AuthAction {
    type: AuthActionType;
    payload?: any;
}

export function loginAction(token: string): AuthAction {
    const action: AuthAction = {type: AuthActionType.Login, payload: token};
    return action;
}
export function logoutAction(): AuthAction {
    const action: AuthAction = {type: AuthActionType.Logout};
    return action;
}

export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {

    const newState = {...currentState};
    
    switch(action.type) {
        case AuthActionType.Login:
            const token = action.payload;
            newState.token = token;            
            newState.user = (jwtDecode(token) as any).user[0];
            localStorage.setItem("token", token);
            localStorage.setItem("userId", (jwtDecode(token) as any).user[0].userId);
            localStorage.setItem("full name", (jwtDecode(token) as any).user[0].firstName + " " + (jwtDecode(token) as any).user[0].lastName);
            break;
        case AuthActionType.Logout:
            newState.token = null;
            newState.user = null;
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            localStorage.removeItem("full name");
            break;
    }

    return newState;

}

