// import React, { useState, useEffect } from 'react';
// import Game from '../Game/Game';
// import Pagination from '../Pagination/Pagination';
// import axios from 'axios';

// const Videogames = () => {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [postsPerPage] = useState(10);

//     useEffect(() => {
//         const fetchPosts = async () => {
//             setLoading(true);
//             const res = await axios.get('http://localhost:3001/videogames');
//             setPosts(res.data);
//             setLoading(false);
//         };
//         fetchPosts();
//     }, []);

//     // Get current posts
//     const indexOfLastPost = currentPage * postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//     // Change page
//     const paginate = pageNumber => setCurrentPage(pageNumber);

//     return (
//         <div>
//             <h1>Videogames</h1>
//             <Game posts={currentPosts} loading={loading} />
//             <Pagination
//                 postsPerPage={postsPerPage}
//                 totalPosts={posts.length}
//                 paginate={paginate}
//             />
//         </div>
//     );
// };

// export default Videogames;
// import React from 'react';

// const Posts = ({ posts, loading }) => {
//     if (loading) {
//         return <h2>Loading...</h2>;
//     }
    
//     return (
//         <ul>
//             {posts.map(post => (
//                 <div key={post.id} >
//                     <h2>{post.name}</h2>
//                     <img src={post.img} alt={post.id} width="300px" />
//                     <h2>{post.genres.join(', ')}</h2>
//                     <h2>{post.rating}</h2>
//                 </div>
//             ))}
//         </ul>
//     );
// };

// export default Posts;

//  {/* <img src="https://i.pinimg.com/564x/57/ee/72/57ee72c7df36b686d17fd810c125458e.jpg" alt="" width="60" height="60" /> */}
//  <span >Favi-Con</span>
//  <form onSubmit={(e) => handleSubmit(e)}>
//    <input
//      type="text"
//      id="title"
//      placeholder='Busca un videojuego...'
//      autoComplete="off"
//      value={name}
//      onChange={(e) => handleChange(e)}
//    ></input>
//  </form>
//  <a ><Link to="/videogame/">Create Game!</Link> </a>
// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import addGame from '../../actions/addGame'

// como me servia antes todos los videogames:
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllGames } from '../../actions/getVideogames';
// import Game from '../Game/Game'
// import NavBar from '../NavBar/NavBar';
// import style from '../Videogames/Videogames.module.css'

// export default function Videogames() {
//     const state = useSelector(state => state.videogames)
//     const dispatch = useDispatch()
//     const [currentPage, setCurrentPage] = useState(0);

//     useEffect(() => {
//         dispatch(getAllGames())
//     }, [dispatch]); // here the 'dispatch' for the warning

//     const gamesLength = state.slice(currentPage, currentPage + 15)
//     // const prevPage = () => { currentPage < 14 ? setCurrentPage(0) : setCurrentPage(currentPage - 15) }
//     // const nextPage = () => { state.length < currentPage + 15 ? setCurrentPage(currentPage) : setCurrentPage(currentPage + 15) }

//     return (
//         <div>
//             {
//                 state.length > 0 && typeof state[0] == "object" ?
//                     (
//                         <div>

//                             <NavBar />
//                             {/* part of filter by and order by */}
//                             <h2>Filter by:</h2>
//                             <select name="genero">
//                                 <option value="value1">Value 1</option>
//                                 <option value="value2">Value 2</option>
//                                 <option value="value3">Value 3</option>
//                             </select>
//                             <select name="Videogame">
//                                 <option value="Existente">Existente</option>
//                                 <option value="Creado">Creado</option>
//                             </select>
//                             <h2>Order by:</h2>
//                             <select name="Videogame" >
//                                 <option value="Ascendente">Ascendente</option>
//                                 <option value="Descendente">Descendente</option>
//                                 <option value="Alfabeticamente">Alfabeticamente </option>
//                                 <option value="Rating">Rating</option>
//                             </select>

//                             {/* here is when I render the component Game */}
//                             <div className={style.container}>
//                                 {state && state.map(vg => {
//                                     return <div key={vg.id} >
//                                         <Link to={`/videogame/${vg.id}`}>
//                                             <Game id={vg.id} img={vg.img} name={vg.name} genres={vg.genres} />
//                                         </Link>
//                                     </div>
//                                 })}
//                             </div>

//                         </div>

//                         //  attempt 1/ pagination
            
             









//                     )
//                     // else:
//                     : (<div>
//                         {/* put styles here! */}
//                         <h1>Loading...</h1>
//                     </div>)

//             }
//         </div>
//     )
// }


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllGames } from '../../actions/getVideogames';
// import Game from '../Game/Game'
// import NavBar from '../NavBar/NavBar';
// import style from '../Videogames/Videogames.module.css'

// export default function Videogames() {
//     const state = useSelector(state => state.videogames)
//     const dispatch = useDispatch()
//     const [currentPage, setCurrentPage] = useState(0);

//     useEffect(() => {
//         dispatch(getAllGames())
//     }, [dispatch]); // here the 'dispatch' for the warning

//     const showGames = state.slice(currentPage, currentPage + 15)  // length = 15
//     const prevPage = () => { currentPage <= 15 ? setCurrentPage(0) : setCurrentPage(currentPage - 15) } // 
//     const nextPage = () => { state.length < currentPage + 15 ? setCurrentPage(currentPage) : setCurrentPage(currentPage + 15) }

//     return (
//         <div>
//             {
//                 showGames.length > 0 && typeof showGames[0] == "object" ?
//                     (
//                         <div>

//                             <NavBar />
//                             {/* part of filter by and order by */}
//                             <h2>Filter by:</h2>
//                             <select name="genero">
//                                 <option value="value1">Value 1</option>
//                                 <option value="value2">Value 2</option>
//                                 <option value="value3">Value 3</option>
//                             </select>
//                             <select name="Videogame">
//                                 <option value="Existente">Existente</option>
//                                 <option value="Creado">Creado</option>
//                             </select>
//                             <h2>Order by:</h2>
//                             <select name="Videogame" >
//                                 <option value="Ascendente">Ascendente</option>
//                                 <option value="Descendente">Descendente</option>
//                                 <option value="Alfabeticamente">Alfabeticamente </option>
//                                 <option value="Rating">Rating</option>
//                             </select>

//                             {/* here is when I render the component Game */}
//                             <div className={style.container}>
//                                 {showGames && showGames.map(vg => {
//                                     return <div key={vg.id} >
//                                         <Link to={`/videogame/${vg.id}`}>
//                                             <Game id={vg.id} img={vg.img} name={vg.name} genres={vg.genres} />
//                                         </Link>
//                                     </div>
//                                 })}
//                             </div>

//                             {/* attempt 1/ pagination */}

//                             {showGames.length > 10 ? <div>
//                                 {currentPage !== 0 ? <button onClick={prevPage}>{'...back 🚀'}</button> : <div></div>} {/*this for prev page */}
//                                 {currentPage !== 90 ? <button onClick={nextPage}>{'next...✨'}</button> : <div></div>} {/*this for next page */}
//                             </div> : <div></div>}


//                         </div> // this is the final finaaaaaaal div!

//                     )
//                     // else:
//                     : (<div>
//                         {/* put styles here! */}
//                         <h1>Loading...</h1>
//                     </div>)

//             }
//         </div>
//     )
// }