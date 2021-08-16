import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {

    const padding = {
        paddingRight: 5,
        margin: 2,
        borderRadius: 4

    }

    return (
        <div>
            <Link to='/' style={padding}>Home</Link>
            {/* <Link to='/anecdotes' style={padding}>anecdotes</Link> */}
            <Link to='/create' style={padding}>create new</Link>
            <Link to='/about' style={padding}>about</Link>
        </div>
    )
}

export default Menu
