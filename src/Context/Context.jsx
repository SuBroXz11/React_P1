import React, { useContext, useState } from 'react'


const AppContext = React.createContext();


export const AppProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const [searchTerm, setSearchTerm] = useState('cat')
    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme)
        const body = document.querySelector('body')
        body.classList.toggle('dark-theme')
        // console.log(body);
    }
    return <AppContext.Provider value={{
        isDarkTheme,
        setIsDarkTheme,
        toggleDarkTheme,
        searchTerm,
        setSearchTerm
    }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export default useGlobalContext;