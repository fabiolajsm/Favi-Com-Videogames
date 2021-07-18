import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGameById } from '../../actions/getDetail';
import style from '../GameDetail/GameDetail.module.css'

export default function GameDetail() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.detail)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getGameById(id))
    }, [id, dispatch]);
    return (
        <div className={style.allDiv}>
            {
                state && Object.keys(state).length > 0 ?
                    <>
                        <div className={style.allDiv}>
                            <h1 className={style.title}>{state.name}</h1>
                            <img className={style.imgIzq} src={state.img} alt="Not found" />
                            <h6 className={style.des}>Description: {state.description.replace(/<[^>]+>/g, '')}</h6>
                            <h4 className={style.text}>◽ Rating: {state.rating} ◽ Released Date: {state.releaseDate} ◽ Genres: {state.genres} ◽ Platforms: {state.platforms}</h4>
                        </div>
                        <Link to="/videogames">back home</Link>
                    </>
                    :
                    <div className={style.loading}></div>
            }
        </div>

    )
};
//https://i.pinimg.com/originals/87/3f/71/873f71c1f893a0aafad8695324fedfc9.gif