import React, { useState } from 'react';
import { connect } from 'react-redux';
import { users_create } from '../server/users';
import styles from '../styles/styles.module.css';

const Row = ({ name, value, password }) => {
    const [showPw, setShowPw] = useState(false);

    return (
        <div className={`${styles.verificationRow}`}>
            <div><span className={`${styles.bold}`}>{name}</span></div>
            {
                password
                    ? showPw
                        ? <div>{value}</div>
                        : <div className={`${styles.linkButton}`} onClick={() => setShowPw(true)}>Click to show</div>
                    : <div>{value}</div>
            }
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

    if (
        !firstName ||
        !lastName ||
        !username ||
        !email ||
        !password
    ) {
        history.push('/');
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
                if (!res) {
                    alert("There was an error while submitting. Please try again.");
                }
                else {
                    history.push('/confirmation');
                }
            })
    };

    return (
        <div className={`${styles.alignCenter}`}>
            <h1 className={`${styles.header}`}>Verification</h1>
            <div className={`${styles.container}`}>
                <div className={`${styles.header2} ${styles.bold}`}>Is this information correct?</div>
                <Row name="First Name:" value={firstName}/>
                <Row name="Last Name:" value={lastName}/>
                <Row name="Username:" value={username}/>
                <Row name="Email:" value={email}/>
                <Row name="Password:" value={password} password/>
                <button className={`${styles.button} ${styles.linkButton}`} onClick={() => history.push('/')}>Go Back</button>
                <button className={`${styles.button} ${styles.actionButton}`} onClick={createUser}>Submit</button>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    const { firstName, lastName, username, email, password } = state.registration;
    return {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password
    };
};

export default connect(mapStateToProps)(Verification);
