import Joi from "joi";

class OrderModel {

    public orderId: number;
    public firstName: string;
    public lastName: string;
    public firstUserAge: number;
    public secondUserAge: number;
    public thirdUserAge: number;
    public fourthUserAge: number;
    public fifthUserAge: number;
    public sixthUserAge: number;
    public seventhUserAge: number;
    public eighthUserAge: number;
    public ninthUserAge: number;
    public tenthUserAge: number;
    public categoryId: number;
    public categoryName: string;
    public similarGame: boolean;
    public payment: string;
    public sexuallyAware: boolean;
    public hangoverEilat: boolean;

    public constructor(order: OrderModel) {
        this.orderId = order.orderId;
        this.firstName = order.firstName;
        this.lastName = order.lastName;
        this.firstUserAge = order.firstUserAge;
        this.secondUserAge = order.secondUserAge;
        this.thirdUserAge = order.thirdUserAge;
        this.fourthUserAge = order.fourthUserAge;
        this.fifthUserAge = order.fifthUserAge;
        this.sixthUserAge = order.sixthUserAge;
        this.seventhUserAge = order.seventhUserAge;
        this.eighthUserAge = order.eighthUserAge;
        this.ninthUserAge = order.ninthUserAge;
        this.tenthUserAge = order.tenthUserAge;
        this.categoryId = order.categoryId;
        this.similarGame = order.similarGame;
        this.payment = order.payment;
        this.sexuallyAware = order.sexuallyAware;
        this.hangoverEilat = order.hangoverEilat;
    }


    private static postValidationSchema = Joi.object ({
        orderId: Joi.forbidden(),
        firstName: Joi.string().required().min(2).max(20),
        lastName: Joi.string().required().min(2).max(20),
        firstUserAge: Joi.number().required().min(1).max(120),
        secondUserAge: Joi.number().required().min(1).max(120),
        thirdUserAge: Joi.number().optional().min(1).max(120),
        fourthUserAge: Joi.number().optional().min(1).max(120),
        fifthUserAge: Joi.number().optional().min(1).max(120),
        sixthUserAge: Joi.number().optional().min(1).max(120),
        seventhUserAge: Joi.number().optional().min(1).max(120),
        eighthUserAge: Joi.number().optional().min(1).max(120),
        ninthUserAge: Joi.number().optional().min(1).max(120),
        tenthUserAge: Joi.number().optional().min(1).max(120),
        categoryId: Joi.number().required().min(1),
        categoryName: Joi.string().optional(),
        similarGame: Joi.object().required(),
        payment: Joi.object().required(),
        sexuallyAware: Joi.object().optional(),
        hangoverEilat: Joi.object().optional(),
    });


}

export default OrderModel;
