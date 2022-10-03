import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom';

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


        const handleClick = (movie) => {
            console.log ('Movie: ', movie);
            dispatch({
                type:'SELECTED_MOVIE',
                payload: movie,
            });
            dispatch({
                type: 'SELECTED_MOVIE_GENRES',
                payload: movie.id,
            });
            history.push('/details');
        }
    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={() => {
                                handleClick(movie);
                            }}
                            src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;