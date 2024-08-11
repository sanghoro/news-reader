import React from 'react'
import { Link } from 'react-router-dom'
import "./PageNotFound.css"

const PageNotFound = () => {
    return (
        <div className='page-not-found-container'>
            <Link className="logo-link" to="/">
                <h1 className='logo'>The Turing Times</h1>
            </Link>
            <h1 className="page-not-found-msg">Page Not Found</h1>
            <div>
                <Link to="/">
                    <button className='home-button'>Go Back To Homepage</button>
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound