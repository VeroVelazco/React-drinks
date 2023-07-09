import { useState } from 'react'
import {createContext} from 'react'
import PropTypes from 'prop-types'



const UserContext = createContext(null)

const UserProvider = ({children}) => {


    const [user, setUser] = useState(null); 

    const login = () => {
        setUser('Vero')
    }
    const logout = () => {
        setUser(null)
    }

    const contextValue = {
        user, 
        login, 
        logout
    }
    
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

// para qeu me require el children
UserProvider.propTypes = {
    children : PropTypes.node.isRequired
}

export {
    UserContext,
    UserProvider
}
