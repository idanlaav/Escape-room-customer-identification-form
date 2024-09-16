import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {    
  }

  public async logout() {
    try {
        await this.authService.logout();
        this.router.navigateByUrl("auth");
        alert("Successful to logged-out.");
    }
    catch (err: any) {
        alert(err.message);
    }
}

}
