import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/Cart-context';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [isCartHighlighted, setIsCartHighlighted] = useState(false)

    const {items} = cartCtx

    const numberOfItems = items.reduce((current, item)=>{
        return current + item.amount;
    }, 0)

    const btnClasses = `${classes.button} ${isCartHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setIsCartHighlighted(true)

        const timer = setTimeout(()=>{
            setIsCartHighlighted(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        }

    }, [items])

    return (
        <button className={btnClasses} onClick={props.onShow}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    )
}

export default HeaderCartButton;