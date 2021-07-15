import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames } from '../../actions/getVideogames';
import { orderBy } from '../../actions/orders&filters'
import Game from '../Game/Game'
import NavBar from '../NavBar/NavBar';
import style from '../Videogames/Videogames.module.css'
import getGenres from '../../actions/getGenres';
import Paginate from '../Paginate/Paginate'

export default function Videogames() {
    const state = useSelector(state => state.paginateGames)
    const genresState = useSelector(state => state.genres)
    const dispatch = useDispatch()

    const [filterBy, setFilterBy] = useState('');
    const [filterByGenres, setFilterByGenres] = useState('All');
    const [page, setPage] = useState(0); // del 1er paginado 

    useEffect(() => {
        dispatch(getAllGames())
        dispatch(getGenres())
        return () => { // tenia que ver con el search por eso esta 2 veces el return!
            dispatch(getAllGames())
        }
    }, [dispatch]); /// se monta y se llena el estado de los vg ^^^^^^

    const showGames = state && state.slice(page, page + 15)  // length = 15
    const prevPage = () => { page <= 15 ? setPage(0) : setPage(page - 15) } // set one and then reset 
    const nextPage = () => { state.length < page + 15 ? setPage(page) : setPage(page + 15) }

    // Order by: 
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
    }; // this one change the store

    // Filters:
    const handleCreated = (e) => { setFilterBy(e.target.value) }
    const handleGenres = (e) => { setFilterByGenres(e.target.value) }

    const ByYou = ({ showGames }) => {
        return (showGames && showGames.map(vg => {
            if (filterByGenres !== 'All') {
                if (vg.created === true && vg.genres.includes(filterByGenres)) {
                    return <div key={vg.id} >
                        <Link to={`/videogame/${vg.id}`}>
                            <Game id={vg.id} img={vg.img} name={vg.name} genres={vg.genres} />
                        </Link>
                    </div>
                }
                return <div>{`Sorry! we don't have a game with that genre`}</div>
            }
            else if (filterByGenres === 'All') {
                if (vg.created === true) {
                    return <div key={vg.id} >
                        <Link to={`/videogame/${vg.id}`}>
                            <Game id={vg.id} img={vg.img} name={vg.name} genres={vg.genres} />
                        </Link>
                    </div>
                }
            }
            return console.log('Created by you');
        }))
    };

    const ByFavs = ({ showGames }) => {
        return (showGames && showGames.map(vg => {
            if (filterByGenres !== 'All') {
                if (vg.created === false && vg.genres.includes(filterByGenres)) {
                    return <div key={vg.id} >
                        <Link to={`/videogame/${vg.id}`}>
                            <Game id={vg.id} img={vg.img} name={vg.name} genres={vg.genres} />
                        </Link>
                    </div>
                }
            }
            else if (filterByGenres === 'All') {
                if (vg.created === false) {
                    return <div key={vg.id} >
                        <Link to={`/videogame/${vg.id}`}>
                            <Game id={vg.id} img={vg.img} name={vg.name} genres={vg.genres} />
                        </Link>
                    </div>
                }
            }
            return console.log('Created by Favi-Com');
        }))
    };

    const DefaultGames = ({ showGames }) => {
        return (showGames && showGames.map(vg => {
            return <div key={vg.id} >
                <Link to={`/videogame/${vg.id}`}>
                    <Game id={vg.id} img={vg.img} name={vg.name} genres={vg.genres} />
                </Link>
            </div>
        }))
    };

    const filtersCreated = (filterBy) => {
        switch (filterBy) {
            case "By you": return (<ByYou showGames={showGames} />);
            case "By Favi-Com": return (<ByFavs showGames={showGames} />);
            default: return (<DefaultGames showGames={showGames} />)
        }
    };

    // Component:
    if (showGames.length === 0 && typeof showGames[0] !== "object") return <div>Loading...</div>

    return (
        <div>
            <div>
                <NavBar />
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
                {/* Filter by: */}
                {
                    <div>
                        <form >
                            <label>Filter by Created:</label>
                            <select name="Created" onChange={handleCreated} >
                                <option value="">All</option>
                                <option value="By Favi-Com">By Favi-Com</option>
                                <option value="By you">By you</option>
                            </select>
                        </form>

                        <form >
                            <label>Filter by Genres:</label>
                            <select name="Genres" onChange={handleGenres} >
                                <option key={'All'} value={'All'}>All</option>
                                {genresState.map((e) => { // este es mi array de generos
                                    return <option key={e.ID} value={e.name}>{e.name}</option>
                                })}
                            </select>
                        </form>
                    </div>
                }
                {/* Render component Game: */}
                <div className={style.container}>
                    {filtersCreated(filterBy)}
                </div>
                {/* pagination: */}
                {showGames.length > 10 ? <div>
                    {page !== 0 ? <button onClick={prevPage}>{'prev page'}</button> : <div></div>} {/*this for prev page */}
                    {page !== 90 ? <button onClick={nextPage}>{'...next page'}</button> : <div></div>} {/*this for next page */}
                </div> : <div></div>}
                <Paginate/>
            </div>
        </div> // last div!
    )
}