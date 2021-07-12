import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGameById } from '../../actions/getDetail';
// import style from '../GameDetail/GameDetail.module.css'

export default function GameDetail() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.detail)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getGameById(id))
    }, [id, dispatch]); // this bc the warning 
    return (
        <div>
            {
                state && Object.keys(state).length > 0 ?
                    <>
                        <h1>{state.name}</h1>
                        <img src={state.img} alt={state.id} width="400px" />
                        <h2>Description: {state.description.replace(/<[^>]+>/g, '')}</h2>
                        <h3>Released Date: {state.releaseDate}</h3>
                        <h3>Platforms: {state.platforms}</h3>
                        <h3>Rating: {state.rating}</h3>
                        <h3>Genres: {state.genres}</h3>
                        <Link to="/videogames">Home</Link>
                    </>
                    :
                    <h1>Loading...</h1>
            }
        </div>

    )
};
//https://i.pinimg.com/originals/87/3f/71/873f71c1f893a0aafad8695324fedfc9.gif