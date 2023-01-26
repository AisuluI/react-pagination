const MovieCard = ({movie}) =>{
    return(
        <>
        <div className="movie-card">
            <img src={movie.posterURL} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        </>
    )
}

export default MovieCard