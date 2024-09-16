import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { InterceptorService } from './services/Interceptor.service';
import { AuthHomeComponent } from './components/auth-area/auth-home/auth-home.component';
import { OrderCardComponent } from './components/orders-area/order-card/order-card.component';
import { AddOrderComponent } from './components/orders-area/add-order/add-order.component';
import { OrdersListComponent } from './components/orders-area/orders-list/orders-list.component';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        AuthHomeComponent,
        OrderCardComponent,
        AddOrderComponent,
        OrdersListComponent,
        PageNotFoundComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return '';
                }
            }
        })
    ],
    providers: [JwtHelperService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
    bootstrap: [LayoutComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class AppModule { }
