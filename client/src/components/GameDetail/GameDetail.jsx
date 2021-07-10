import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGameById } from '../../actions/getDetail';

export default function GameDetail() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.detail)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getGameById(id))
    }, [id, dispatch]);
    return (
        <div>
            <h1>Detail</h1>
            <h2>{state.name}</h2>
            <img src={state.img} alt={state.id} width="200px" />
            <h2>Description: {state.description}</h2>
            <h3>Released Date: {state.releaseDate}</h3>
            <h3>Platforms: {state.platforms}</h3>
            <h3>Rating: {state.rating}</h3>
            <h3>Generos: {state.genres}</h3>
            <Link to="/videogames">Home</Link>
        </div>
    )
};
//https://i.pinimg.com/originals/87/3f/71/873f71c1f893a0aafad8695324fedfc9.gif