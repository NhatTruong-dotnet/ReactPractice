import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartItem from '../UI/CartItem';
import Modal from '../UI/Modal'
import styles from './Cart.module.css'
export default function Cart(props) {
    const cartCtx = useContext(CartContext);
    const CartItemRemoveHandler = (id) =>{};
    const cartItemAddHandler = (item) =>{};
    const cartItems = (
        <ul className={styles['cart-items']}>
            {
                cartCtx.items.map((item)=> (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={CartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null,item)}
                ></CartItem>))
            }
        </ul>
    )
    return (
        <Modal onClose={props.onCloseCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onCloseCart}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
            
        </Modal>
    )
}
