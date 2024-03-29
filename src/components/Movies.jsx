import { useState, useEffect } from "react";
// import MovieCard from "./MovieCard";
// import ReactPaginate from 'react-paginate';
import Pagination from "./Pagination";

const api = "https://api.sampleapis.com/movies/family";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data);
  };

  useEffect(() => {
    fetchData(api);
  }, []);

  // Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function Items({ currentItems }) {
//   return (
//     <div className="container">
//       {currentItems &&
//         currentItems.map((item) => (
//             <MovieCard movie={item} />
//         ))}
//     </div>
//   );
// }

// function PaginatedItems({ itemsPerPage }) {
//   // Here we use item offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0);

//   // Simulate fetching items from another resources.
//   // (This could be items from props; or items loaded in a local state
//   // from an API endpoint with useEffect and useState)
//   const endOffset = itemOffset + itemsPerPage;
//   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//   const currentItems = movies.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(movies.length / itemsPerPage);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % movies.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };

//   return (
//     <>
    
//       <ReactPaginate
//     nextLabel="next >"
//     onPageChange={handlePageClick}
//     pageRangeDisplayed={3}
//     marginPagesDisplayed={2}
//     pageCount={pageCount}
//     previousLabel="< previous"
//     pageClassName="page-item"
//     pageLinkClassName="page-link"
//     previousClassName="page-item"
//     previousLinkClassName="page-link"
//     nextClassName="page-item"
//     nextLinkClassName="page-link"
//     breakLabel="..."
//     breakClassName="page-item"
//     breakLinkClassName="page-link"
//     containerClassName="pagination"
//     activeClassName="active"
//     renderOnZeroPageCount={null}
//       />
//         <Items currentItems={currentItems} />
//     </>
//   );
// }


//   return <PaginatedItems itemsPerPage={12} />

return <Pagination movies={movies} />

};

export default Movies;

//https://codepen.io/monsieurv/pen/abyJQWQ?editors=1010
