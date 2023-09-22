const initialState = {
    login: false,
    signup: false,
    user: null,
    login_msg: '',
    signup_msg: ''
}


export const Aunthntication_reducer = (state = initialState, action) => {

    switch (action.type) {
        case "sign_up":

            return {
                ...state,
                signup: true,
                signup_msg: "Signup successfullly"
            }

        case "log_in":

            return {
                ...state,
                signup: true,
                login: true,
                login_msg: "Login successfullly",
                user: action.payload
            }

            

        default:
            return state;
    }
}