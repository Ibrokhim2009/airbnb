import React from 'react'
import NavbarMiddle from './NavbarMiddle'
import NavbarBottom from './NavbarBottom'

function Navbar() {
    return (
        <div className=' mb-[30px] sticky bg-[white] top-0 left-0'>
            <NavbarMiddle />
            <NavbarBottom />
        </div>
    )
}

export default Navbar