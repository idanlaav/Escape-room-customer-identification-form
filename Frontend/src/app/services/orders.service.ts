import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../models/category-model';
import { OrderModel } from '../models/order-model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  public async getAllCategories(): Promise<CategoryModel[]> {
    const audience = await firstValueFrom(this.http.get<CategoryModel[]>(environment.categoriesUrl))
    return audience;
  }

  public async getOneCategoryById(categoryId: number): Promise<CategoryModel[]> {
    const category = await firstValueFrom(this.http.get<CategoryModel[]>(environment.categoryByIdUrl + categoryId))
    return category;
  }

  public async getOrderByName(firstName: string, lastName: string): Promise<OrderModel> {
    const order = await firstValueFrom(this.http.get<OrderModel>(environment.orderByNameUrl + firstName + "-" + lastName))
    return order;
  }

  public async getAllOrders(): Promise<OrderModel[]> {
    const orders = await firstValueFrom(this.http.get<OrderModel[]>(environment.ordersUrl))
    return orders;
  }

  public async addOrder(order: OrderModel): Promise<void> {
    const addedGift = await firstValueFrom(this.http.post<OrderModel>(environment.ordersUrl, order))
  }

}
