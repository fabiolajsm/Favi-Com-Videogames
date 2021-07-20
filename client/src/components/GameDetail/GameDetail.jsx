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
        <div>
            {
                state && Object.keys(state).length > 0 ?
                    <div className={style.allDiv}>
                        <div>
                            <h1 className={style.title}>{state.name}</h1>
                            <img className={style.img} src={state.img} alt="Not found" />
                            <h6 className={style.des}>{state.description.replace(/<[^>]+>/g, '')}</h6>
                            <div className={style.cp}>
                                <h4 className={style.text}>
                                    <span className={style.tt}>◽ Rating:  </span>{state.rating}
                                    <span className={style.tt}>◽ Platforms:</span>{state.platforms}
                                </h4>
                                <h4 className={style.text}>
                                    <span className={style.tt}>◽ Genres:</span>{state.genres}
                                    <span className={style.tt}>◽ Released Date:  </span>{state.releaseDate}
                                </h4>
                            </div>
                        </div>
                        <Link to="/videogames">
                            <button className={style.btn}>
                                back home
                            </button>
                        </Link>
                    </div>
                    :
                    <div className={style.loading}></div>
            }
        </div>
    )
};