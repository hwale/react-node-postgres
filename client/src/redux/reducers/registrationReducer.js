const initialState = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    password2: ''
}

export default function(state = initialState, action) {
    switch (action.type) {
        default: 
            return state;
        case "SET_REGISTRATION_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                [name]: value
            }
    }
}