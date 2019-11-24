import { SET_REGISTRATION_VALUE } from './types';

export const handleRegistrationChange = (name, value) => {
    return {
        type: SET_REGISTRATION_VALUE,
        payload: {
            name,
            value
        }
    }
}