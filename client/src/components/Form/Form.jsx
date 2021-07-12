import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addGame, getGenres, getPlatforms } from '../../actions/addGame'

export default function CreateGame() {
    const stateP = useSelector(state => state.platforms)
    const stateG = useSelector(state => state.genres)

    useEffect(() => {
        dispatch(getPlatforms())
    }, []) // missing dependency?

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [rating, setRating] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [platforms, setPlatforms] = useState([])
    const [genres, setGenres] = useState([])

    const { push } = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        try {
            let body = {  // lo que le voy a pasar al addNewGame
                name: name,
                description: description,
                img: img,
                releaseDate: releaseDate,
                rating: rating,
                platforms: platforms,
                genres: genres
            } //  name, description, img, releaseDate, rating, platforms, genres
            // console.log(body, 'entreeeeeeeeeeeeeeeee');
            dispatch(addGame(body))
            alert('Your videogame was created!')
            push("/videogames")
        }
        catch (err) {
            console.log(err.message);
        }
    }

    function handleChange(e) {
        switch (e.target.name) {
            case 'name': setName(e.target.value); break;
            case 'description': setDescription(e.target.value); break;
            case 'img': setImg(e.target.value); break;
            case 'rating': setRating(e.target.value); break;
            case 'releaseDate': setReleaseDate(e.target.value); break;
            case 'platforms': setPlatforms([...platforms, e.target.value]); break; // []
            case 'genres': setGenres([...genres, e.target.value]); break;
            default: break
        }
    }

    return (
        <div>
            {/* onSubmit={(e) => handleSubmit(e)}    lo que tenia antes el form */}
            <form onSubmit={(e) => handleSubmit(e)} >
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" value={description} onChange={handleChange} placeholder="Description" />
                </div>
                <div>
                    <label>Img:</label>
                    <input type="text" name="img" value={img} onChange={handleChange} placeholder="Url/img..." />
                </div>
                <div>
                    <label>Release Date:</label>
                    <input type="date" name="releaseDate" value={releaseDate} onChange={handleChange} placeholder="Release Date" />
                </div>
                <div>
                    <label>Rating:</label>
                    <input type="number" name="rating" value={rating} onChange={handleChange} placeholder="Rating" />
                </div>

                {/* platforms && genres part */}
                <div>
                    <h4>Platforms:</h4>
                    {stateP.map((e) => {
                        return (
                            <div key={e.ID}>
                                <input
                                    type='checkbox'
                                    name='platforms'
                                    value={e.ID}
                                    onChange={(e) => { handleChange(e) }}
                                />
                                <label name={e}>{e.name}</label>
                            </div>
                        )
                    })}
                </div>

                <div>
                    <h4>Genres:</h4>
                    {stateG.map((e) => {
                        return (
                            <div key={e.ID}>
                                <input
                                    type='checkbox'
                                    name='genres'
                                    value={e.ID}
                                    onChange={(e) => { handleChange(e) }}
                                />
                                <label name={e}>{e.name}</label>
                            </div>
                        )
                    })}
                </div>
                {/* now, when you click, the information most go... */}
                <input onClick={handleSubmit} type="submit" value="Agregar" className="btn btn-primary mb-2" />
            </form>
            <button><Link to="/videogames">Home</Link> </button>
        </div >
    );

}; // hasta aquii

