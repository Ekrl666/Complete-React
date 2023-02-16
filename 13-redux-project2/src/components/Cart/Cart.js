import { useDispatch, useSelector } from 'react-redux';
import { showCartActions } from '../../store/showCartSlice';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.action.cartItems)

  const hideCartHandler = () => {
    dispatch(showCartActions.hideCart())
  }

  const orderHandler = async() => {
      await fetch('https://react-http-54231-default-rtdb.europe-west1.firebasedatabase.app/customerOrders.json', {
        method: 'POST',
        body: JSON.stringify({
          orderedItems: cartItems
        })
      })
  }

  const itemList = cartItems.map(item => {
    return <CartItem key={item.title}
    item={{ title: item.title, quantity: item.amount, total: (item.amount * item.price), price: item.price}}
    />
  })
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {itemList}
      </ul>
      <button className={classes.button} onClick={hideCartHandler}>
      <span>Close</span>
      </button>
      {itemList.length > 0 && <button className={classes.button} onClick={orderHandler}>
      <span>Order</span>
      </button>}
    </Card>
  );
};

export default Cart;
