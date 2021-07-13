import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames } from '../../actions/getVideogames';
import { orderBy, filterBy } from '../../actions/orders&filters'
import Game from '../Game/Game'
import NavBar from '../NavBar/NavBar';
import style from '../Videogames/Videogames.module.css'

export default function Videogames() {
    const state = useSelector(state => state.videogames) /// este es mi state de todos los videojuegos

    const dispatch = useDispatch()
    const [page, setPage] = useState(0);

    useEffect(() => {
        dispatch(getAllGames())
        return () => { // tenia que ver con el search por eso esta 2 veces el return!
            dispatch(getAllGames())
        }
    }, [dispatch]); /// se monta y se llena el estado de los vg ^^^^^^

    const showGames = state && state.slice(page, page + 15)  // length = 15
    const prevPage = () => { page <= 15 ? setPage(0) : setPage(page - 15) } // set one and then reset 
    const nextPage = () => { state.length < page + 15 ? setPage(page) : setPage(page + 15) }

    const handleOrder = (e) => {
        switch (e.target.value) {
            case "Ascendant": dispatch(orderBy((a, b) => b.name.length - a.name.length)); break
            case "Descendant": dispatch(orderBy((a, b) => a.name.length - b.name.length)); break
            case "A-Z": dispatch(orderBy((a, b) => { return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1 })); break
            case "Z-A": dispatch(orderBy((a, b) => { return b.name.toUpperCase() < a.name.toUpperCase() ? -1 : 1 })); break
            case "Higher": dispatch(orderBy((a, b) => b.rating - a.rating)); break
            case "Lower": dispatch(orderBy((a, b) => a.rating - b.rating)); break
            default: break
        }
    }

    const handleCreated = (e) => {
        // console.log(e.target.value, 'aquiiiii');
        switch (e.target.value) {
            case "By you": dispatch(filterBy(vg => vg.created !== false)); break 
            case "By Favi-Com": dispatch(filterBy(vg => vg.description === "")); break
            default: break
        }
    }

    return (
        <div>
            {

                showGames.length > 0 && typeof showGames[0] == "object" ?
                    (
                        <div>
                            <NavBar />

                            {/* Filter by: */}
                            {<form >
                                <label>Filter by Created:</label>
                                <select name="Created" onChange={handleCreated} >
                                    <option value="By Favi-Com">By Favi-Com</option>
                                    <option value="By you">By you</option>
                                </select>
                            </form>}

                            {/* Order by: */}
                            {<form >
                                <label>Order by:</label>
                                <select name="Order" onChange={handleOrder} >
                                    <option value="Ascendant">Ascendant</option>
                                    <option value="Descendant">Descendant</option>
                                    <option value="A-Z">Alphabetically A-Z</option>
                                    <option value="Z-A">Alphabetically Z-A</option>
                                    <option value="Higher">Higher Rating </option>
                                    <option value="Lower">Lower Rating</option>
                                </select>
                            </form>}

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