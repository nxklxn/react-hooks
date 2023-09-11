
import React from 'react'
import { useThemeContext } from '../contexts/ThemeContext'

function Navbar() {

    const { customTheme, switchTheme } = useThemeContext();
    
    return (
        <section data-theme={customTheme} className='flex flex-row h-16 bg-base-200 shadow-xl w-full justify-between'>
            <div className='flex items-center'>
                <button onClick={() => switchTheme('light')} data-theme='light' className='btn btn-primary ml-1'>Theme 1</button>
                <button onClick={() => switchTheme('dark')} data-theme='dark' className='btn btn-primary mx-1'>Theme 2</button>
                <button onClick={() => switchTheme('cupcake')} data-theme='cupcake' className='btn btn-primary'>Theme 3</button>
                <button onClick={() => switchTheme('synthwave')} data-theme='synthwave' className='btn btn-primary mx-1'>Theme 4</button>
                <button onClick={() => switchTheme('forest')} data-theme='forest' className='btn btn-primary'>Theme 5</button>
                <button onClick={() => switchTheme('aqua')} data-theme='aqua' className='btn btn-primary ml-1'>Theme 6</button>
            </div>
            <div className='flex'>
                <div className='h-full px-4 hover:bg-black/10 flex items-center justify-center cursor-pointer'>Home</div>
                <div className='h-full px-4 hover:bg-black/10 flex items-center justify-center cursor-pointer'>About</div>
                <div className='h-full px-4 hover:bg-black/10 flex items-center justify-center cursor-pointer'>Whatever</div>
            </div>
        </section>
    )
}

export default Navbar