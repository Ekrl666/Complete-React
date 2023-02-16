import classes from './CartButton.module.css';
import {useDispatch, useSelector} from 'react-redux'
import { showCartActions } from '../../store/showCartSlice';


const CartButton = (props) => {
  const dispatch = useDispatch()
  const totalItems = useSelector(state => state.action.totalItems)

  const showCartHandler = () => {
      dispatch(showCartActions.showCart())
  }

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
