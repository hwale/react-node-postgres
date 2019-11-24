import React from 'react';
import styles from '../styles/styles.module.css';

const Confirmation = () => {
    return (
        <div>
            <h1 className={`${styles.header}`}>Confirmation</h1>
            <div className={`${styles.container}`}>
                <h2>You have been registered.</h2>
            </div>
        </div>
    )
}

export default Confirmation;