import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
export default function HeaderCartButton(props) {
    const ctx = useContext(CartContext);
    const numberOfCartItems = ctx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    },0)
    return (
        <button className={styles.button} onClick={props.OnCartClick}>
            <span className={styles.icon}><CartIcon></CartIcon></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    )
}
