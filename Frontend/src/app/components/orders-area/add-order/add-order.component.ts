import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/category-model';
import { OrderModel } from 'src/app/models/order-model';
import { CategoriesService } from 'src/app/services/categories.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
    selector: 'app-add-order',
    templateUrl: './add-order.component.html',
    styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

    public games: CategoryModel[];
    public order = new OrderModel();
    public thankYouStyle = 0;
    public playersNumberValue: number;
    public categoryIdSelected: number;
    public message = 0

    constructor(private orderService: OrdersService, private categoriesService: CategoriesService, private router: Router) { }

    async ngOnInit() {
        try {
            this.games = await this.categoriesService.getAllCategories();
            this.order.firstUserAge = 1;
            this.order.secondUserAge = 1;
        }
        catch (err: any) {
            alert(err.message)
        }
    }

    async send() {
        try {
            if(this.playersNumberValue == 2){
                this.order.thirdUserAge = null;
                this.order.fourthUserAge = null;
                this.order.fifthUserAge = null;
                this.order.sixthUserAge = null;
                this.order.seventhUserAge = null;
                this.order.eighthUserAge = null;
                this.order.ninthUserAge = null;
                this.order.tenthUserAge = null;
            }
            else if(this.playersNumberValue == 3){
                this.order.fourthUserAge = null;
                this.order.fifthUserAge = null;
                this.order.sixthUserAge = null;
                this.order.seventhUserAge = null;
                this.order.eighthUserAge = null;
                this.order.ninthUserAge = null;
                this.order.tenthUserAge = null;
            }
            else if(this.playersNumberValue == 4){
                this.order.fifthUserAge = null;
                this.order.sixthUserAge = null;
                this.order.seventhUserAge = null;
                this.order.eighthUserAge = null;
                this.order.ninthUserAge = null;
                this.order.tenthUserAge = null;
            }
            else if(this.playersNumberValue == 5){
                this.order.sixthUserAge = null;
                this.order.seventhUserAge = null;
                this.order.eighthUserAge = null;
                this.order.ninthUserAge = null;
                this.order.tenthUserAge = null;
            }
            else if(this.playersNumberValue == 6){
                this.order.seventhUserAge = null;
                this.order.eighthUserAge = null;
                this.order.ninthUserAge = null;
                this.order.tenthUserAge = null;
            }
            else if(this.playersNumberValue == 7){
                this.order.eighthUserAge = null;
                this.order.ninthUserAge = null;
                this.order.tenthUserAge = null;
            }
            else if(this.playersNumberValue == 8){
                this.order.ninthUserAge = null;
                this.order.tenthUserAge = null;
            }
            else if(this.playersNumberValue == 9){
                this.order.tenthUserAge = null;
            }
            await this.orderService.addOrder(this.order);
            alert("הטופס נשלח בהצלחה")
            this.thankYouStyle = 1;
            this.message = 1;
        }
        catch (err: any) {
            alert(err.message)
        }
    }

    async selectPlayersNumber(playersNumberValue: number) {
        this.playersNumberValue = playersNumberValue;
    }
}


