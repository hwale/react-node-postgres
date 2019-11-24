import React from 'react';
import { connect } from 'react-redux';
import { handleRegistrationChange } from '../redux/actions';
import styles from '../styles/styles.module.css';

const InputField = ({ type, name, label, value, onChange }) => {
    return (
        <div className={`${styles.inputField}`}>
            <label>
                {label}
                <input className={`${styles.input}`} type={type} id={name} value={value} onChange={onChange(name)}></input>
            </label>
        </div>
    )
}

const Landing = props => {
    const {
        firstName,
        lastName, 
        username, 
        email, 
        password, 
        password2, 
        handleRegistrationChange,
        history
    } = props;

    const onRegistrationContinue = event => {
        event.preventDefault();
        if (
            !firstName,
            !lastName,
            !username,
            !email,
            !password
        ) {            
            return alert("Please fill in all fields.");
        }
        if (password === password2) {
            history.push('/verification');
        }
        else {
            alert("Passwords do not match.")
        }
    }

    return (
        <div>
            <h1 className={`${styles.header}`}>Registration</h1>
            <div className={`${styles.container}`}>
                <InputField type="text" name="firstName" label="First Name:" value={firstName} onChange={handleRegistrationChange}/>
                <InputField type="text" name="lastName" label="Last Name:" value={lastName} onChange={handleRegistrationChange}/>
                <InputField type="text" name="username" label="Username:" value={username} onChange={handleRegistrationChange}/>
                <InputField type="text" name="email" label="Email:" value={email} onChange={handleRegistrationChange}/>
                <InputField type="password" name="password" label="Password:" value={password} onChange={handleRegistrationChange}/>
                <InputField type="password" name="password2" label="Confirm Password:" value={password2} onChange={handleRegistrationChange}/>
                <button className={`${styles.submitButton}`} onClick={onRegistrationContinue}>Continue</button>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    const { firstName, lastName, username, email, password, password2 } = state.registration;
    return {
        firstName,
        lastName,
        username,
        email,
        password,
        password2
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleRegistrationChange: name => event => dispatch(handleRegistrationChange(name, event.target.value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);