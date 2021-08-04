import React from 'react'
import './Footer.css'
export const Footer = () => {
    let footerStyle = {
        width: "100%",
        // border:"2px solid red"
    }
    return (
        < footer className="bg-dark text-light py-3" style={footerStyle} >
            <p className="text-center">
                No Rights Reserved &copy; MyTodosList.com
            </p>
        </footer >
    )
}
