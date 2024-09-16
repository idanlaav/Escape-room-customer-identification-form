import express, { NextFunction, Request, Response } from "express";
import GiftModel from "../4-models/order-model";
import logic from "../5-logic/logic";


const router = express.Router();

// http://localhost:3001/api/categories
router.get("/categories", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const categories = await logic.getAllCategories();
        response.json(categories);
    }
    catch (err: any) {
        next(err);
    }
})

// http://localhost:3001/api/category-by-id
router.get("/category-by-id/:categoryId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const categoryId = +request.params.categoryId;
        const category = await logic.getOneCategoryById(categoryId);
        response.json(category);
    }
    catch (err: any) {
        next(err);
    }
})

// http://localhost:3001/api/order-by-name
router.get("/order-by-name/:firstName-:lastName", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const firstName = request.params.firstName;
        const lastName = request.params.lastName;
        const order = await logic.getOrderByName(firstName,lastName);
        response.json(order);
    }
    catch (err: any) {
        next(err);
    }
})

// http://localhost:3001/api/orders
router.get("/orders", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const orders = await logic.getAllOrders();
        response.json(orders);
    }
    catch (err: any) {
        next(err);
    }
})

// http://localhost:3001/api/order
router.post("/orders", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const order = new GiftModel(request.body);
        const addedOrder = await logic.addOrder(order);
        response.status(201).json(addedOrder);
    }
    catch (err: any) {
        next(err);
    }
})


export default router;