import React from 'react';
import { connect } from 'react-redux';
import { handleRegistrationChange } from '../redux/actions';

const InputField = ({ name, label, value, onChange }) => {
    return (
        <div>
            <label>
                {label}
                <input id={name} value={value} onChange={onChange(name)}></input>
            </label>
        </div>
    )
}

const Landing = ({firstName, lastName, username, email, password, password2, handleRegistrationChange}) => {
    const onRegistrationSubmit = event => {
        event.preventDefault()
    }

    return (
        <div>
            <h2>Registration</h2>
            <InputField name="firstName" label="First Name:" value={firstName} onChange={handleRegistrationChange}/>
            <InputField name="lastName" label="Last Name:" value={lastName} onChange={handleRegistrationChange}/>
            <InputField name="username" label="Username:" value={username} onChange={handleRegistrationChange}/>
            <InputField name="email" label="Email:" value={email} onChange={handleRegistrationChange}/>
            <InputField name="password" label="Password:" value={password} onChange={handleRegistrationChange}/>
            <InputField name="password2" label="Confirm Password:" value={password2} onChange={handleRegistrationChange}/>
            <button onClick={onRegistrationSubmit}>Submit</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state, 'statee');
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        username: state.username,
        email: state.email,
        password: state.password,
        password2: state.password2
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handleRegistrationChange: name => event => dispatch(handleRegistrationChange(name, event.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);