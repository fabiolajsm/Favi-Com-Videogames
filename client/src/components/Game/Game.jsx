import React from 'react'
// import styles from './Game.modules.css'

export default function Game({ id, img, name, genres, rating }) {
    return (
        <div >
            <img src={img} alt={id} width="200px" />
            <h2>{name}</h2>
            <h3>{genres.join(', ')}</h3>
            <h4>{rating}</h4>
        </div>
    );
};