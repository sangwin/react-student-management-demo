/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import { useReducer } from 'react';
import AuthContext from './auth-context'
const defaultState = { isLoggedIn: false, email: '' };

const AuthReducer = (state, action) => {
    if (action.type === "LOGIN") {
        return {
            ...state,
            email: action.data.email,
            isLoggedIn: true
        }
    }
    if (action.type === "LOGOUT") {
        return {
            ...state,
            email: '',
            isLoggedIn: false
        }
    }
    return defaultState;
}

const AuthContextProvider = props => {

    const [state, dispatchHandlers] = useReducer(AuthReducer, defaultState)

    const logoutHandler = () => {
        dispatchHandlers({ type: 'LOGOUT' })
    }

    const loginHandler = (email, password) => {
        dispatchHandlers({ type: 'LOGIN', data: { email, password } })
    }

    const context = {
        isLoggedIn: state.isLoggedIn,
        email: state.email,
        logout: logoutHandler,
        login: loginHandler,
    };


    return <AuthContext.Provider value={context}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContextProvider;

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */