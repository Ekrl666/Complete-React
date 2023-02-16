import {createSlice} from '@reduxjs/toolkit';

const initialCartItemsState = {
    cartItems : [],
    totalItems: 0,
    changed: false
}

const cartActionsSlice = createSlice({
   name: 'cartActions',
   initialState: initialCartItemsState,
   reducers: {
        replaceCart(state, action) {
            state.cartItems = action.payload.cartItems;
            state.totalItems = action.payload.totalItems;
        },

        addToChart(state, action) {
            //const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            const existingCartItemIndex = state.cartItems.findIndex(item => item.title === action.payload.title)
            const existingCartItem = state.cartItems[existingCartItemIndex];
            let updatedItems;
            if(existingCartItem) {
                const updatedItem = {...existingCartItem, amount: existingCartItem.amount + 1}
                updatedItems = [...state.cartItems];
                updatedItems[existingCartItemIndex] = updatedItem
            } else {
                updatedItems = state.cartItems.concat(action.payload);          
            }
            const newTotalItems = state.totalItems +1
            return {
                cartItems: updatedItems,
                totalItems: newTotalItems,
                changed: true
            }
        },

        removeFromCart(state, action) {

            const existingCartItemIndex = state.cartItems.findIndex(item => item.title === action.payload.title)
            const existingCartItem = state.cartItems[existingCartItemIndex];
            //const updatedTotalAmount = state.totalAmount - existingCartItem.price;
            let updatedItems;
            
            if(existingCartItem.amount === 1) {
                updatedItems = state.cartItems.filter(item => item.title !== action.payload.title);
                console.log(existingCartItem.amount)
                console.log(updatedItems)
            } else {
                const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
                updatedItems = [...state.cartItems];
                updatedItems[existingCartItemIndex] = updatedItem
            }
            const newTotalItems = state.totalItems - 1
            return {
                cartItems: updatedItems,
                totalItems: newTotalItems,
                changed: true
            }
        }
   }
})

export const cartActionsActions = cartActionsSlice.actions;
export default cartActionsSlice;

