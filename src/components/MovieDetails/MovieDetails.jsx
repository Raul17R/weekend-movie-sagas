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
            <img src={movie.title} />
        </div>
       </div>
  
    )
}
export default MovieDetails;