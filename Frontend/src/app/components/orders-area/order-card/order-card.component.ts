import { Component, Input, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/order-model';


@Component({
    selector: 'app-order-card',
    templateUrl: './order-card.component.html',
    styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {

    @Input()
    public order: OrderModel[];

    constructor() { }

    async ngOnInit() {
        console.log(this.order[0]);
        
    }

}


