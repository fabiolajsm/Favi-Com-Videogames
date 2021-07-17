import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addGame, getGenres, getPlatforms } from '../../actions/addGame'

export default function CreateGame() {
    const stateP = useSelector(state => state.platforms)
    const stateG = useSelector(state => state.genres)
    const dispatch = useDispatch()
    const { push } = useHistory()
    const urlValidate = /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/

    useEffect(() => {
        dispatch(getGenres())
        dispatch(getPlatforms())
    }, [])

    const [name, setName] = useState('');
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [rating, setRating] = useState(0)
    const [releaseDate, setReleaseDate] = useState('')
    const [platforms, setPlatforms] = useState([])
    const [genres, setGenres] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        if (name === '') return alert('Name is required');
        if (description === '') return alert('Description is required');
        if (img === '') return alert('Url image is required');
        if (!urlValidate.test(img)) return alert('Image it most be an URL');
        if (releaseDate === '') return alert('Release date is required');
        if (platforms.length === 0) return alert('You most select at least one platform');
        if (genres.length === 0) return alert('You most select at least one genre');
        else {
            let body = { name, description, img, releaseDate, rating, platforms, genres }
            console.log(body, 'aquiiiiiiiiiiiii');
            dispatch(addGame(body))
            alert('Your videogame was created!')
            push("/videogames")
        }
    }

    function handleChange(e) {
        switch (e.target.name) {
            case 'name': setName(e.target.value); break;
            case 'description': setDescription(e.target.value); break;
            case 'img': setImg(e.target.value); break;
            case 'rating': setRating(e.target.value); break;
            case 'releaseDate': setReleaseDate(e.target.value); break;
            case 'platforms': setPlatforms([...platforms, e.target.value]); break;
            case 'genres': setGenres([...genres, e.target.value]); break;
            default: break
        }
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} >
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={name} required onChange={handleChange} placeholder="Name" />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" value={description} required onChange={handleChange} placeholder="Description" />
                </div>
                <div>
                    <label>Img:</label>
                    <input type="text" name="img" value={img} required onChange={handleChange} placeholder="Url/img..." />
                </div>
                <div>
                    <label>Release Date:</label>
                    <input type="date" name="releaseDate" value={releaseDate} required onChange={handleChange} placeholder="Release Date" />
                </div>
                <div>
                    <label>Rating:</label>
                    <input type="number" name="rating" value={rating} max="5" min="1" required onChange={handleChange} placeholder="Rating" />
                </div>

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
                <input onClick={handleSubmit} type="submit" value="Agregar" className="btn btn-primary mb-2" />
            </form>
            <button><Link to="/videogames">Home</Link></button>
        </div >
    );
};
