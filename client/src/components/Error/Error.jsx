import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div>
            <h1>Page not found</h1>
            <Link to="/videogames">Click here for go back</Link>
        </div>
    )
}