import React, { useState } from 'react';
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
    const [page, setPage] = useState(0);

    useEffect(() => {
        dispatch(getAllGames())
        return () => {
            dispatch(getAllGames())
        }
    }, [dispatch]); // here the 'dispatch' for the warning

    const showGames = state && state.slice(page, page + 15)  // length = 15
    const prevPage = () => { page <= 15 ? setPage(0) : setPage(page - 15) } // set one and then reset 
    const nextPage = () => { state.length < page + 15 ? setPage(page) : setPage(page + 15) }

    return (
        <div>
            {
                showGames.length > 0 && typeof showGames[0] == "object" ?
                    (
                        <div>
                            <NavBar />

                            {/* Filter by: */}
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





                            {/* Order by: */}
                            {/* <h2>Order by:</h2>   // later, when i have the filter!
                            <select name="Videogame" >
                                <option value="Ascendente">Ascendente</option>
                                <option value="Descendente">Descendente</option>
                                <option value="Alfabeticamente">Alfabeticamente </option>
                                <option value="Rating">Rating</option>
                            </select> */}

                            {/* here is when I render the component Game */}
                            <div className={style.container}>
                                {showGames && showGames.map(vg => {
                                    return <div key={vg.id} >
                                        <Link to={`/videogame/${vg.id}`}>
                                            <Game id={vg.id} img={vg.img} name={vg.name} genres={vg.genres} />
                                        </Link>
                                    </div>
                                })}
                            </div>

                            {/* pagination: */}
                            {showGames.length > 10 ? <div>
                                {page !== 0 ? <button onClick={prevPage}>{'prev page'}</button> : <div></div>} {/*this for prev page */}
                                {page !== 90 ? <button onClick={nextPage}>{'...next page'}</button> : <div></div>} {/*this for next page */}
                            </div> : <div></div>}

                        </div> // this is the final finaaaaaaal div!
                    )
                    // else:
                    : (<div>
                        {/* put styles here! */}
                        <h1>Loading...</h1>
                    </div>)

            }
        </div>
    )
}