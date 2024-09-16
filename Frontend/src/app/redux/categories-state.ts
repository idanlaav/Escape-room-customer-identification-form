import { CategoryModel } from "../models/category-model";

// Categories State: 
export class CategoriesState {
    public categories: CategoryModel[] = [];
    public category: CategoryModel;
}

// Category Action Types:
export enum CategoryActionType {
    FetchCategories = "FetchCategories",
    SelectedCategoryByUser  = "SelectedCategoryByUser"
}

// Category Action: 
export interface CategoryAction {
    type: CategoryActionType;
    payload: any;
}

// Category Action Creators: 
export function fetchCategoryAction(categories: CategoryModel[]): CategoryAction {
    return { type: CategoryActionType.FetchCategories, payload: categories };
}
export function selectedCategoryByUser(category: CategoryModel): CategoryAction {
    return { type: CategoryActionType.SelectedCategoryByUser, payload: category };
}

// Categories Reducer:
export function categoriesReducer(currentState: CategoriesState = new CategoriesState(), action: CategoryAction): CategoriesState {

    const newState = { ...currentState };

    switch (action.type) {
        case CategoryActionType.FetchCategories:
        newState.categories = action.payload;
        break;
        case CategoryActionType.SelectedCategoryByUser:
            newState.category = action.payload;
            break;
    }

    return newState;
}