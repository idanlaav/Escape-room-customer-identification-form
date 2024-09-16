import { OkPacket } from "mysql";
import dal from "../2-utils/dal"
import CategoryModel from "../4-models/category-model";
import OrderModel from "../4-models/order-model";


async function getAllCategories(): Promise<CategoryModel[]> {
    const sql = "SELECT * FROM categories";
    const categories = await dal.execute(sql)
    return categories;
}

async function getOneCategoryById(categoryId: number): Promise<CategoryModel[]> {
    const sql = "SELECT * FROM categories WHERE categoryId = ?";
    const values = [categoryId];
    const category = await dal.execute(sql, values)
    return category;
}

async function getOrderByName(firstName: string, lastName: string): Promise<OrderModel> {
    console.log(firstName);
    console.log(lastName);

    
    
    const sql = `SELECT orders.orderId, CONCAT(firstName, ' ', lastName) AS fullName, orders.firstUserAge,
                 orders.secondUserAge, orders.thirdUserAge, orders.fourthUserAge, orders.fifthUserAge,
                 orders.sixthUserAge, orders.seventhUserAge, orders.eighthUserAge, orders.ninthUserAge, 
                 orders.tenthUserAge, orders.categoryId, categories.categoryName ,orders.similarGame, orders.payment,
                 orders.sexuallyAware, orders.hangoverEilat FROM orders JOIN categories ON categories.categoryId=orders.categoryId
                 WHERE orders.firstName = ? AND orders.lastName = ?;`;
    const values = [firstName, lastName];
    console.log(values);
    
    const orders = await dal.execute(sql, values)
    return orders;
}

async function getAllOrders(): Promise<OrderModel[]> {
    const sql = "SELECT * FROM orders";
    const orders = await dal.execute(sql)
    return orders;
}

async function addOrder(order: OrderModel): Promise<OrderModel> {
    const allOrders = await getAllOrders();
    const existOrderToDelete = await allOrders.filter(o => o.firstName == order.firstName && o.lastName == order.lastName);
    if(existOrderToDelete[0]) {
        deleteOrder(existOrderToDelete[0].orderId);
    }
    const sql = "INSERT INTO orders VALUES(DEFAULT, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [order.firstName, order.lastName, order.firstUserAge, order.secondUserAge, order.thirdUserAge, order.fourthUserAge, order.fifthUserAge, order.sixthUserAge, order.seventhUserAge, order.eighthUserAge, order.ninthUserAge, order.tenthUserAge, order.categoryId, order.similarGame, order.payment, order.sexuallyAware, order.hangoverEilat];
    const result: OkPacket = await dal.execute(sql, values);
    console.log("ads");
    order.orderId = result.insertId
    return order;
}

async function deleteOrder(orderId: number): Promise<void> {
    const sql = "DELETE FROM orders WHERE orderId = ?";
    const values = [orderId];
    await dal.execute(sql, values)
}


export default {
    getAllCategories,
    getOneCategoryById,
    getOrderByName,
    getAllOrders,
    addOrder
};

