import React from 'react';
import { Link } from 'react-router-dom';
// import style from './Landing.module.css'

export default function LandingPage() {
    return (
        <div>
            <h1>Welcome to Favi-Con!</h1>
            <h2>algo</h2>
            <Link to='/videogames'>Press to start</Link>
        </div>
    )
}