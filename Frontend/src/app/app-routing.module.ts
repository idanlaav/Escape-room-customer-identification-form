import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { NoAuthGuard } from './components/auth-area/guards/no-auth.guard';
import { AuthGuard } from './components/auth-area/guards/auth.guard';
import { AuthHomeComponent } from './components/auth-area/auth-home/auth-home.component';
import { AddOrderComponent } from './components/orders-area/add-order/add-order.component';


const routes: Routes = [
    {path: '', pathMatch : 'full', redirectTo: 'home'},
    {path:'auth', component: AuthHomeComponent, canActivate:[NoAuthGuard]},
    {path: "home", component: HomeComponent, canActivate:[AuthGuard] },
    {path: "orders-new", component: AddOrderComponent},
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
