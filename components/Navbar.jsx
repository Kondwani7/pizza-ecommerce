import React from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callbutton}>
                    <Image src="/public/telephone.png" alt="contact us" width="20px" height="20px"/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>
                        <div className={styles.text}>Order Now</div>
                        <div className={styles.text}>+2609723445599</div>
                    </div>
                </div>
            </div>
            
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/images/logo.png" alt="logo" width="160px" height="160px"/>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src="/images/cart.png" alt="cart" width="30px" height="30px"/>
                        <div className={styles.counter}>2</div>
                    </div>
                </div>

            
        </div>
    )
}

export default Navbar;