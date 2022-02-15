import { useEffect, useState } from 'react'
import './App.css'

type Quote = {
  id:number,
  text: string,
  author: string
}

function App() {


  const [quotes, setQoutes] = useState<Quote[]>([])
  const [randomQuote, setRandomQuote] = useState<Quote>()
  
  function getRandomQuote(){
      fetch('http://localhost:4000/random-quote')
      .then(resp => resp.json())
      .then(quote => setRandomQuote(quote))
  }
    

  useEffect(()=>{
    fetch('http://localhost:4000/quotes')
    .then(resp=>resp.json())
    .then(quotes => setQoutes(quotes))
  },[])


  return (
    <div className="App">
        <h2>Get Random Quote:</h2>
      <button onClick={()=>{
        getRandomQuote()
      }}>
          Get Quote
      </button>
        {randomQuote
        ?<p>
          "{randomQuote.text}"
          <span>{randomQuote.author}</span>  
        </p>
        : null
        }

      <h1>The Quotes</h1>
      <ul>
        {
          quotes.map(quote =>{
            return(
              <li key={quote.id}>
                "{quote.text}"
                <span>{quote.author}</span>  
              </li>
            ) 
          })
        }
      </ul>

    

    </div>
  )
}

export default App
