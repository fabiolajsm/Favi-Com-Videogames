import React from 'react'
import style from './Game.module.css'

export default function Game({ id, img, name, genres }) {
    return (
        <div className={style.card}>
            <h2 className={style.title}>{name}</h2>
            <img key={id} src={img} alt="Not found" className={style.image} />
            <h4>{genres.join(', ')}</h4>
        </div>
    );
};