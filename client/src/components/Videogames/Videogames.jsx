import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames } from '../../actions/getVideogames';
import Game from '../Game/Game'
import NavBar from '../NavBar/NavBar';
import style from '../Videogames/Videogames.module.css'

export default function Videogames() {
    const state = useSelector(state => state.videogames)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllGames())
    }, [dispatch]); // here the 'dispatch' for the warning
    return (
        <div>
            {
                state && state.length > 0 ?
                    (
                        <div>
                            <NavBar />
                            <h2>Filter by:</h2>
                            <select name="genero">
                                <option value="value1">Value 1</option>
                                <option value="value2">Value 2</option>
                                <option value="value3">Value 3</option>
                            </select>
                            <select name="Videogame">
                                <option value="Existente">Existente</option>
                                <option value="Creado">Creado</option>
                            </select>
                            <h2>Order by:</h2>
                            <select name="Videogame" >
                                <option value="Ascendente">Ascendente</option>
                                <option value="Descendente">Descendente</option>
                                <option value="Alfabeticamente">Alfabeticamente </option>
                                <option value="Rating">Rating</option>
                            </select>
                            <div className={style.container}>
                                {state && state.map(vg => {
                                    return <div key={vg.id} >
                                        <Link to={`/videogame/${vg.id}`}>
                                            <Game id={vg.id} img={vg.img} name={vg.name} genres={vg.genres} rating={vg.rating} />
                                        </Link>
                                    </div>
                                })}
                            </div>
                            <div>
                                <Link to='/videogames'>Press to start</Link>
                            </div>
                        </div>
                    )
                    : (<div>
                        <h1>Loading...</h1>
                    </div>)

            }

        </div>
    )
}