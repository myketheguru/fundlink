import React from 'react'
import { Link } from 'react-router-dom'

const ContactCircle = ({image, path}) => {
    return (
        <Link to="/contacts/:id">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="online"></div>
        </Link>
    )
}

export default ContactCircle
