import React, { useState } from 'react';
import { connect } from 'react-redux';
import { users_create } from '../server';
import styles from '../styles/styles.module.css';

const Row = ({ name, value }) => {
    return (
        <div className={`${styles.verificationRow}`}>
            <div><span className={`${styles.bold}`}>{name}</span></div>
            <div>{value}</div>
        </div>
    )
}

const Verification = props => {
    const {
        firstName,
        lastName, 
        username, 
        email, 
        password, 
        history
    } = props;

    const [showPw, setShowPw] = useState(false);

    const hidePw = pw => {
        const length = pw.length;
        const asterisk = "*";
        return asterisk.repeat(pw.length);
    }

    const createUser = () => {
        const user = {
            firstName,
            lastName,
            username,
            email,
            password
        }
        users_create(user)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    };

    const backToStart = () => {

    }

    return (
        <div className={`${styles.alignCenter}`}>
            <h1 className={`${styles.header}`}>Verification</h1>
            <div className={`${styles.container}`}>
                <div className={`${styles.header2} ${styles.bold}`}>Is this information correct?</div>
                <Row name="First Name:" value={firstName}/>
                <Row name="Last Name:" value={lastName}/>
                <Row name="Username:" value={username}/>
                <Row name="Email:" value={email}/>
                <Row name="Password:" value={password}/>
                <button className={`${styles.button} ${styles.cancelButton}`} onClick={() => history.push('/')}>Go Back</button>
                <button className={`${styles.button} ${styles.submitButton}`}>Submit</button>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    const { firstName, lastName, username, email, password } = state.registration;
    return {
        firstName: firstName || "Charlie",
        lastName: lastName || "Park",
        username: username || "hwale",
        email: email || "sketchblock@gmail.com",
        password: password || "123"
    };
};

export default connect(mapStateToProps)(Verification);
