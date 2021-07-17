import React from 'react';
import { Link } from 'react-router-dom';
import style from './Landing.module.css'

export default function LandingPage() {
    return (
        <div className={style.content} >
            <div className={style.conTitle}>
                <h1 className={style.title}>Welcome to Favi-Con!</h1>
                <h1 className={style.title}>a web page where you can find videogames</h1>
            </div>
            <Link to='/videogames'><button className={style.bt}>Press to start</button></Link>
        </div>
    )
}