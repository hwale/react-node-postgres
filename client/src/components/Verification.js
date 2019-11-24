import React, { useState } from 'react';
import { connect } from 'react-redux';
import { users_create } from '../server';
import styles from '../styles/styles.module.css';

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

    const Row = ({ name, value }) => {
        return (
            <div className={`${styles.verificationRow}`}>
                <div className={`${styles.verificationLabels}`}><h4 className={`${styles.normalizeH4}`}>{name}</h4></div>
                <div className={`${styles.verificationValues}`}>{value}</div>
            </div>
        )
    }

    return (
        <div className={`${styles.alignCenter}`}>
            <h1 className={`${styles.header}`}>Verification</h1>
            <div className={`${styles.container}`}>
                <Row name="First Name:" value={firstName}/>
                <Row name="Last Name:" value={lastName}/>
                <Row name="Username:" value={username}/>
                <Row name="Email:" value={email}/>
                <Row name="Password:" value={password}/>
                <button className={`${styles.submitButton}`}>Submit</button>
                <button>Cancel</button>
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
