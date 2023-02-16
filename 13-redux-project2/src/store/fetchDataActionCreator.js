import { showCartActions } from "./showCartSlice";
import { cartActionsActions } from "./cartActionsSlice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async() => {

            const response = await fetch('https://react-http-54231-default-rtdb.europe-west1.firebasedatabase.app/cart.json')
    
            if(!response.ok) {
                throw new Error('Fetching Data Failed!')
            }
    
            const data = await response.json();
            return data;
        }

        try {
           const cartData = await fetchData();
           dispatch(cartActionsActions.replaceCart({cartItems: cartData.cartItems || [], totalItems: cartData.totalItems}))
        } catch (error) {
            dispatch(showCartActions.showNotification({
                status:'error',
                title: 'Error',
                message: 'Fetching Message Failed...'
              }))
        }
    }
    
}