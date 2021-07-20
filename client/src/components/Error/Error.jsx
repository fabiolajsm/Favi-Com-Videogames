import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Error/Error.module.css'

export default function Error() {
    return (
        <div className={style.div}>
            <h1 className={style.title}>page not found</h1>
            <Link to="/videogames"><button className={style.btn}>Click here for go back</button></Link>
        </div>
    )
};