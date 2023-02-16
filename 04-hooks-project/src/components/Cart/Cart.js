import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext, useState } from 'react';
import CartContext from '../../store/Cart-context';
import CartItem from './CartItem';
import CheckoutForm from './Checkout';

const Cart = (props) => {

    const [isOrdered, setIsOrdered] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmitted, setDidSubmitted] = useState(false)

    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const hasItems = cartCtx.items.length > 0

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount:1})
    }

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    }

    const cartClearHandler = () => {
        props.onHide()
    }

    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map(item =>
         <CartItem 
            key= {item.id} 
            name={item.name}
            amount = {item.amount}
            price = {item.price}
            onAdd = {cartItemAddHandler.bind(null, item)}
            onRemove = {cartItemRemoveHandler.bind(null, item.id)}
        />
         )}</ul>


    const orderHandler = () => {
        setIsOrdered(true)
    };

    const submitOrderHandler = async (checkOutData) => {
        setIsSubmitting(true)
        await fetch('https://react-http-54231-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: checkOutData,
                orderedItems: cartCtx.items
            })
        })
        setIsSubmitting(false)
        setDidSubmitted(true)
        cartCtx.clearCart()
    }



    const formActions = <div className={classes.actions}>
            <button className={classes['button__alt']} onClick={props.onHide}>Close</button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>

    const cartModal = <>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isOrdered && <CheckoutForm onConfirm = {submitOrderHandler} onCancel={props.onHide}/>}
            {!isOrdered && formActions}
    </>

    const isSubmittingModal = <div><p>Submitting Your oreders...</p></div>

    const didSubmittedModal = <>
        <p>Your Orders Have Submitted!</p>
        <div className={classes.actions}>
            <button className={classes.button} onClick={cartClearHandler}>Close</button>
        </div>
    </>

    return (
        <Modal>
            {!isSubmitting && !didSubmitted && cartModal}
            {isSubmitting && isSubmittingModal}
            {!isSubmitting && didSubmitted&& didSubmittedModal}
        </Modal>
    )

}

export default Cart;