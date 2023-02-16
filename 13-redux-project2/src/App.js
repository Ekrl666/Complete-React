import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { showCartActions } from './store/showCartSlice';
import Notification from './components/UI/Notification';
import { fetchCartData } from './store/fetchDataActionCreator';

let justLoaded = true;

function App() {
  const isCartShown = useSelector(state => state.showCart.isCartShown)
  const dispatch = useDispatch()
  const cart = useSelector(state => state.action)
  const notification = useSelector(state => state.showCart.notification) 

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    
    const sendCartData = async() => {

      dispatch(showCartActions.showNotification({
        status:'pending',
        title: 'Sending',
        message: 'Sending Cart Data...'
      }))

      const response = await fetch('https://react-http-54231-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
      method: 'PUT',
      body:JSON.stringify({cartItems: cart.cartItems, totalItems: cart.totalItems})
    })
      if(!response.ok) {
        throw new Error('Sending cart data failed')
      }
      

      dispatch(showCartActions.showNotification({
        status:'success',
        title: 'Success!',
        message: 'Cart Data Has Sent...'
      }))
    };

    if(justLoaded) {
      justLoaded= false;
      return
    }
    
    if(cart.changed) {
      sendCartData().catch(error => {
        dispatch(showCartActions.showNotification({
          status:'error',
          title: 'Error',
          message: 'Sending Message Failed...'
        }))
      })
    }
    
    
    
  }, [cart, dispatch])

  return (
    <>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
    <Layout>
      {isCartShown ?<Cart /> : <Products />}
    </Layout>
    </>
  );
}

export default App;
