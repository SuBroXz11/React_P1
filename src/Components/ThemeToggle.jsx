import React from 'react'
import { TiAdjustBrightness } from 'react-icons/ti'
import { FiMoon } from 'react-icons/fi'
import useGlobalContext from '../Context/Context'

export default function ThemeToggle() {
    const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
    return (
        <section className='toggle-container'>
            <button className='dark-toggle' onClick={toggleDarkTheme}>
                {isDarkTheme ? (<FiMoon className='toggle-icon' />) : (
                    <TiAdjustBrightness className='toggle-icon' />)}
            </button>
        </section>
    )
}
