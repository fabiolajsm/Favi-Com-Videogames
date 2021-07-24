import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames } from '../../actions/getVideogames';
import Game from '../Game/Game'
import NavBar from '../NavBar/NavBar';
import style from '../Videogames/Videogames.module.css'
import getGenres from '../../actions/getGenres';
import Orderby from '../Orders/Orders';
import FilterOptions from '../Filters/Filters';
import { filterByGenres } from '../../actions/orders&filters';
import { loading } from '../../actions/getByName';

export default function Videogames() {
    const showGames = useSelector(state => state.filtered)
    const state = useSelector(state => state.videogames)
    const stateLoading = useSelector(state => state.loading)
    const genresState = useSelector(state => state.genres)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getAllGames())
        dispatch(getGenres())
        return () => {
            dispatch(getAllGames())
        }
    }, [dispatch]);

    const handleGenres = (e) => {
        setPage(1)
        dispatch(filterByGenres(state, e.target.value))
    };

    const handleEliminateFilters = () => {
        setPage(1)
        dispatch(loading(true))
        dispatch(getAllGames())
    };

    const handlePage = (e) => { e.target.name === "next" ? setPage(page + 1) : setPage(page - 1) };

    const paginate = (showGames, page) => {
        if (showGames.length < 15 && showGames.length !== 0) {
            return showGames;
        }
        else {
            const offset = page * 15;
            const initial = offset - 15;
            window.scrollTo(200, 200) // slower
            return showGames.slice(initial, offset);
        }
    };

    return (
        <div className={stateLoading ? style.back2 : style.back1}>
            <div>
                <div>
                    <NavBar />
                </div>
                <div className={style.grid_container}>
                    <div className={style.grid_item1}><Orderby /></div>
                    <div className={style.grid_item2}>
                        <FilterOptions />
                    </div>
                    <div className={style.grid_item3}>
                        <div>
                            <h5 className={style.label}>Filter by Genres:</h5>
                            <form>
                                <select className={style.box_select} name="Genres" onChange={handleGenres} >
                                    <option key={'All'} value={'All'}>All</option>
                                    {genresState.map((e) => {
                                        return <option key={e.ID} value={e.name}>{e.name}</option>
                                    })}
                                </select>
                            </form>
                        </div>
                    </div>
                </div>

                <div className={style.container}>
                    {
                        !stateLoading && showGames.length > 0 && paginate(showGames, page).map(vg => {
                            return <div key={vg.id}>
                                <Link to={`/videogame/${vg.id}`}>
                                    <Game id={vg.id} img={vg.img} name={vg.name} genres={vg.genres} />
                                </Link>
                            </div>
                        })
                    }
                    {
                        !stateLoading && showGames.length === 0 ?
                            <Game id="Not found" img="https://i.pinimg.com/564x/5f/92/5a/5f925a4b065b191e76aed89ab4d94d17.jpg" name="Not found" genres={["not found"]} />
                            : null
                    }
                </div>
                {
                    !stateLoading && showGames.length > 15 ? <div >
                        <div className={style.btnC}>
                            {page !== 1 ?
                                <button className={style.btn} onClick={(e) => handlePage(e)} name="prev">
                                    prev
                                </button>
                                : null
                            }
                            <p className={style.page}>{page}</p>
                            {page < 7 ?
                                <button className={style.btn} onClick={(e) => handlePage(e)} name="next">
                                    next
                                </button>
                                : null
                            }
                        </div>
                    </div> : <button className={style.eliminate} onClick={() => handleEliminateFilters()}>Eliminate filters</button>
                }
            </div>
        </div>
    )
};