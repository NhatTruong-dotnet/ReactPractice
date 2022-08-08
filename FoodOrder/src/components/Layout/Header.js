import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
export default function Header(props) {
    return (
        <>
            <header className={styles.header}>
                <h1>Meals Store</h1>
                <HeaderCartButton OnCartClick={props.OnCartClick}></HeaderCartButton>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage}></img>
            </div>
        </>
    )
}
