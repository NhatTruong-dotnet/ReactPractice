import React, { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'
export default function MealItem(props) {
    const ctx = useContext(CartContext)
    const addToCartHandler = (amount) =>{
        ctx.addItem({
            id:props.id,
            name: props.name,
            price: props.price,
            amount: amount
        });
    }
    return (
        <li className={styles.meal}>
            <div >
                <h3 className={styles.name}>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{`$${props.price.toFixed(2)}`}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}  id={props.id}></MealItemForm>
            </div>
        </li>
    )
}
