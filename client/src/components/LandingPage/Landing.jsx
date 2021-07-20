import React from 'react';
import { Link } from 'react-router-dom';
import style from './Landing.module.css'

export default function LandingPage() {
    return (
        <div className={style.content} >
            <div className={style.conTitle}>
                <p className={style.title}>¡Welcome to Favi-Com!</p>
                <p className={style.title}>a world of videogames...</p>
            </div>
            <Link to='/videogames'><button className={style.bt}>Press to start</button></Link>
        </div>
    )
};