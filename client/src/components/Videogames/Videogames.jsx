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

export default function Videogames() {
    const showGames = useSelector(state => state.filtered)
    const state = useSelector(state => state.videogames)
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

    const handleGenres = (e) => { dispatch(filterByGenres(state, e.target.value)) };

    const handlePage = (e) => {
        if (e.target.name === "next") {
            if (page === Math.ceil(showGames.length / 15))
                return alert(`There are no more pages`);
            setPage(page + 1);
        }
        else {
            if (page === 1) return alert(`There are no more previus pages`);
            setPage(page - 1);
        }
    };

    const paginate = (showGames, page) => {
        if (showGames.length < 15 && showGames.length !== 0) {
            return showGames;
        }
        else {
            const offset = page * 15;
            const initial = offset - 15;
            window.scrollTo(0, 0)
            return showGames.slice(initial, offset);
        }
    };
    // if (showGames.length === 0 && typeof showGames[0] !== "object") return <div>Loading...</div>
    return (
        <div className={showGames.length > 0 ? style.back1 : style.back2}>
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
                                    {genresState.map((e) => { // este es mi array de generos
                                        return <option key={e.ID} value={e.name}>{e.name}</option>
                                    })}
                                </select>
                            </form>
                        </div>
                    </div>
                </div>


                <div className={style.container}>
                    {
                        showGames.length > 0 && paginate(showGames, page).map(vg => {
                            return <div key={vg.id}>
                                <Link to={`/videogame/${vg.id}`}>
                                    <Game id={vg.id} img={vg.img} name={vg.name} genres={vg.genres} />
                                </Link>
                            </div>
                        })
                    }
                </div>

                {
                    showGames && showGames.length > 15 ? <div > {/* className={s.btnCont} */}
                        {/* className={s.btnPage}
className={s.btnPage} */}
                        <button onClick={(e) => handlePage(e)} name="prev">
                            prev
                        </button>
                        {/* className={s.PageN} */}
                        <p>{page}</p>
                        <button onClick={(e) => handlePage(e)} name="next">
                            next
                        </button>
                    </div> : <button onClick={() => dispatch(getAllGames())}>Eliminate filters</button>

                }

            </div>
        </div>
    )
}
