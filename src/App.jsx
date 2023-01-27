import { useState } from 'react'
import './App.css'
import Movies from './components/Movies'
import ReactPaginate from 'react-paginate';

// const api = 'https://api.sampleapis.com/movies/family'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Movies</h1>
    <p>Deploying to Netlify</p>
 <div className="App">
     <Movies />
    </div>
    </>
   
  )
}

export default App

// https://www.npmjs.com/package/react-paginate