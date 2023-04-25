import { combineReducers } from "redux";
import { inventoryReducer } from "./reducers/InventoryReducer";

export const rootReducer = combineReducers({
  inventoryReducer: inventoryReducer,
});
