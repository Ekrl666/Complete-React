import {configureStore} from '@reduxjs/toolkit';
import cartActionsSlice from './cartActionsSlice';
import showCartSlice from './showCartSlice';


const store = configureStore({
    reducer: {showCart: showCartSlice.reducer, action: cartActionsSlice.reducer}
})

export default store;