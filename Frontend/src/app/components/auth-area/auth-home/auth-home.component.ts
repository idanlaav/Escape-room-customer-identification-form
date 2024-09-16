import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsModel } from 'src/app/models/credentials-model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-auth-home',
    templateUrl: './auth-home.component.html',
    styleUrls: ['./auth-home.component.css']
})
export class AuthHomeComponent implements OnInit {

    public userId: number;
    public userLogin = new CredentialsModel();

    constructor(private authService: AuthService, private router: Router) { }

    async ngOnInit() {
    }

    public async login() {
        try {
            await this.authService.login(this.userLogin);
            alert("Successful to logged-in.");
            this.router.navigateByUrl("home");
        }
        catch (err: any) {
            alert("Incorrect email or password")
        }
    }

}
