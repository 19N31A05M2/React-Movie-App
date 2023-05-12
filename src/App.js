import {useState,useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';
 
const App = () =>{
    const [movies, Setmovies] = useState([]);
    const [SearchTerm, SetSearchTerm] = useState('')
    const SearchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        Setmovies(data.Search)
    }
    useEffect(() => {
        SearchMovies('Spiderman');
    },[]);
    return (
        <div className='app'>
            <h1>MoviesLand</h1>
            <div className='search'>
                <input
                    placeholder='Search a Movie'
                    value={SearchTerm}
                    onChange={(e) =>{SetSearchTerm(e.target.value)}}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => { SearchMovies(SearchTerm)} }
                />    
            </div>
            {
                movies?.length >0 
                ?(
                    <div className='container'>
                        {
                            movies.map((movie) =>(
                                <MovieCard movie1={movie}/>
                            ))
                        }
                    </div>
                ) :(
                    <div className='empty'>
                        <h2>No movies Found</h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;