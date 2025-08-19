
import 'react-multi-carousel/lib/styles.css';
import CarousalPage from "../allmovies/CarousalPage";


export default function AllMovies() {

return(
<div className='w-full h-full bg-gray-900'>
<CarousalPage baseurl="https://api.themoviedb.org/3/discover/movie?" header="All Movies"/>
<CarousalPage baseurl="https://api.themoviedb.org/3/trending/movie/day?" header="Trending"/>
<CarousalPage baseurl="https://api.themoviedb.org/3/trending/all/day?" header="Trending Today"/>
<CarousalPage baseurl="https://api.themoviedb.org/3/movie/popular?" header="Popular Movies" page={2}/>
<CarousalPage baseurl="https://api.themoviedb.org/3/movie/top_rated?" header="Top Rated"/>
<CarousalPage baseurl="https://api.themoviedb.org/3/movie/upcoming?" header="Upcoming"/>
<CarousalPage baseurl="https://api.themoviedb.org/3/tv/popular?" header="Popular Series" />
<CarousalPage baseurl="https://api.themoviedb.org/3/tv/top_rated?" header="TopRated Series" />
<CarousalPage baseurl="https://api.themoviedb.org/3/tv/airing_today?" header="Airing Series today" />
</div>
)

}

  