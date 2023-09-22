import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase";

export const Loginasync = (data) => {
    return dispatch => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // console.log(userCredential, "userCredential");
                // Signed in 
                const user = userCredential.user;
                dispatch(Login(user));
                // ...
            })
            .catch((error) => {
                console.log(error, "error");
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
}

const Login = (user) => {
    return {
        type: "log_in",
        payload: user
    }
}

export const Signupasync = (data) => {
    return dispatch => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // console.log(userCredential,"userCredential");
                // Signed in 
                // const user = userCredential.user;
                // ...
                dispatch(Signup());
            })
            .catch((error) => {
                console.log("error",error);
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }
}


const Signup = () => {
    return {
        type: "sign_up"
    }
}
