import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CredentialsModel } from '../models/credentials-model';
import store from '../redux/store';
import { AuthActionType, loginAction, logoutAction } from '../redux/auth-state';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    public async login(credentials: CredentialsModel) {
        const token = await firstValueFrom(this.http.post<string>(environment.loginUrl, credentials));
        store.dispatch(loginAction(token.toString()));
        return token;
    }

    public logout() {
        store.dispatch(logoutAction());
        store.dispatch({ type: AuthActionType.Logout, payload: null });
    }

    public isLoggedIn(): boolean {
        return store.getState().authState.token !== null;
    }
    
}
