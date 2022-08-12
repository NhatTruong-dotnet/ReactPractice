import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
export default function HeaderCartButton(props) {
    const ctx = useContext(CartContext);
    const {items} = ctx;
    const numberOfCartItems = items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    },0)
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const btnClasses = `${styles.button} ${btnIsHighlighted && styles.bump}`;
    useEffect(()=> {
        if (items.length ===0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        }
    },[items]);
    return (
        <button className={btnClasses} onClick={props.OnCartClick}>
            <span className={styles.icon}><CartIcon></CartIcon></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    )
}
