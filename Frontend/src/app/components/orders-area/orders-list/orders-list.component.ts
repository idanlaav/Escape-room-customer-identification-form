import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/category-model';
import { OrderModel } from 'src/app/models/order-model';
import { CategoriesService } from 'src/app/services/categories.service';
import { OrdersService } from 'src/app/services/orders.service';


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

    public ngSelect = "";
    public orders: OrderModel[];
    public currentOrder: any;
    public searchFirstName: string;
    public searchLastName: string;
    public message = 0;

  constructor(private ordersService: OrdersService) { }

    async ngOnInit() {
    try {
        this.orders = await this.ordersService.getAllOrders();
      } 
      catch (err: any) {
          alert(err.message);
      }
  }

  public async firstNameSearch(searchFirstName: string) {
      try {
            this.searchFirstName = searchFirstName;
        } 
        catch (err: any) {
            alert(err.message);
        }     
  }

  public async lastNameSearch(searchLastName: string) {
    try {
        this.searchLastName = searchLastName;
    } 
    catch (err: any) {
        alert(err.message);
    }
  }

  public async searchOrder() {
    try {
        this.currentOrder = this.orders.filter(o => o.firstName == this.searchFirstName && o.lastName == this.searchLastName);        
        if(this.currentOrder.length == 0) {
            this.message = 1;
        }   
        else {
            this.message = 0;
        }     
    } 
    catch (err: any) {
        alert(err.message);
    }
  }

}


