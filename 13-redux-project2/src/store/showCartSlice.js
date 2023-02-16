import {createSlice} from "@reduxjs/toolkit";

const initialShowCartState = {
    isCartShown: false,
    notification: null
}

const showCartSlice = createSlice({
    name: 'showCart',
    initialState: initialShowCartState,
    reducers: {
        showCart(state) {
            state.isCartShown = true;
        },
        hideCart(state) {
            state.isCartShown = false;
        },
        showNotification (state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const showCartActions = showCartSlice.actions

export default showCartSlice