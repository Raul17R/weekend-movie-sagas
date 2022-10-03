import react from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MovieDetails () {
    const history = useHistory();
    const movie = useSelector ((store) => store.selectedMovie);
    const genres = useSelector ((store) => store.genres);

    //Buttton to go back home
    const homeButton = () => {
        history.push('/');
    };
    return (
       <div>
        <button onClick={homeButton}>HOME</button>

        <div>
            <h2>{movie.title}</h2>
            <img src={movie.poster} />
            <h3>Description: </h3>
            <p>{movie.description}</p>
            <h3>Genres: </h3>
            {genres.map((genre) => `${genre.name}`)}
        </div>
       </div>
  
    )
}
export default MovieDetails;