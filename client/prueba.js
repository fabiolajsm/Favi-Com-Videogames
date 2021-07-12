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

// export default function CreateGame() {
//     const dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(addGame(postGame))
//     }, []);
//     const [input, setInput] = useState({ name: '', description: '', img: '', releaseDate: '', rating: '', });
//     const [genres, setGenres] = useState([])
//     const [platforms, setPlatforms] = useState([])

//     let postGame = {  // lo que le voy a pasar al addNewGame
//         name: input.name,
//         description: input.description,
//         img: input.img,
//         rating: input.rating,
//         releaseDate: input.released,
//         platforms: platforms,
//         genres: genres
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         dispatch(addGame(postGame))
//     }

//     function handleInputChange(e) {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     }

//     function handlePlatforms(e) {
//         console.log(e.name, 'valueeeeeeeeeeeeee platformssss');
//         let platforms = [];
//         platforms.push(e.value)
//         setPlatforms(platforms)
//     }

//     function handleGenres(e) {
//         console.log(e.value, 'valueeeeeeeeeeeeee genre');
//         let genres = [];
//         genres.push(e.value)
//         setGenres(genres)
//     }

//     return (
//         <div>
//             <form onSubmit={(e) => handleSubmit(e)}>
//                 <div>
//                     <label>Name:</label>
//                     <input type="text" name="name" value={input.name} onChange={handleInputChange} placeholder="Name" />
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <input type="text" name="description" value={input.description} onChange={handleInputChange} placeholder="Description" />
//                 </div>
//                 <div>
//                     <label>Img:</label>
//                     <input type="text" name="img" value={input.img} onChange={handleInputChange} placeholder="Url/img..." />
//                 </div>
//                 <div>
//                     <label>Release Date:</label>
//                     <input type="number" name="releaseDate" value={input.releaseDate} onChange={handleInputChange} placeholder="Release Date" />
//                 </div>
//                 <div>
//                     <label>Rating:</label>
//                     <input type="number" name="rating" value={input.rating} onChange={handleInputChange} placeholder="Rating" />
//                 </div>
//                 <div>
//                     <label>Platforms:</label>
//                     <input type="text" name="platforms" value={input.platforms} onChange={handlePlatforms} placeholder="Platforms:" />
//                 </div>
//                 <div>
//                     <label>Genres:</label>
//                     <input type="text" name="genres" value={input.genres} onChange={handleGenres} placeholder="Genres:" />
//                 </div>
//                 <input type="submit" value="Agregar" className="btn btn-primary mb-2" />
//             </form>
//             <button><Link to="/videogames">Home</Link> </button>
//         </div>
//     );

// }; // hasta aquii

