import { useEffect, useState } from 'react'
import './App.css'
import Quote from './components/Quote'
import Quotes from './components/Quotes'
import RandomQuote from './components/RandomQuote'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Pages/Home'
import SingleQuote from './Pages/SingleQuote'
import SingleAuthor from './Pages/SingleAuthor'

export type QuoteType = {
  id:number,
  text: string,
  authorId: number,
  author: string,
  authorAge:number,
  authorImage:string
}

function App() {

  const [quotes, setQoutes] = useState<QuoteType[]>([])
  const [singleQuote, setSingleQuote] = useState<QuoteType>()


  useEffect(()=>{
    fetch('http://localhost:5000/quotes')
    .then(resp=>resp.json())
    .then(quotes => setQoutes(quotes))
  },[])


  return (
    <div className="App">
    

      <Routes>
        <Route index element={<Navigate replace to="/quotes" />}/>
        <Route path="/quotes" element={<Home quotes={quotes}/>}/>
        <Route path="/quotes/:id" element={<SingleQuote/>}/>
        <Route path="/authors/:id" element={<SingleAuthor/>}/>
      </Routes>
    </div>
  )
}

export default App
