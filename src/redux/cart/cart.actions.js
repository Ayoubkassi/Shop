import { CartActionsTypes } from './cart.types';

export const toggleCartHidden = () => ({
  type : CartActionsTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type : CartActionsTypes.ADD_ITEM,
  payload : item
})
