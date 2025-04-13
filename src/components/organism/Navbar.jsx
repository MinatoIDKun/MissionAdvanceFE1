import React from 'react'

function Navbar() {

    return (
    <>
    <nav className='border-b-1 border-other-border bg-other-primaryBackground z-1000 fixed w-full drop-shadow-md md:drop-shadow-none'>
        <div className='flex container mx-auto py-4 lg:px-20'>
            <img
                src={'src/assets/images/logo-videobelajar.svg'}
                alt='logo-videobelajar'
            />
        </div>  
    </nav>
    </>
    )
}    

export default Navbar