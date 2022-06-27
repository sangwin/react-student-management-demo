/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
import React from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    email: '',
    logout: () => { },
    login: (email, password) => { }
});

export default AuthContext;
/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */