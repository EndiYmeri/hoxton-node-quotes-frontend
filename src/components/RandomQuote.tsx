import { useState } from "react"
import { QuoteType } from "../App"
import Quote from "./Quote"

function RandomQuote(){
    const [randomQuote, setRandomQuote] = useState<QuoteType>()
    function getRandomQuote(){
        fetch('http://localhost:4000/random-quote')
        .then(resp => resp.json())
        .then(quote => setRandomQuote(quote))
    }
    return(
        <>
           <h2>Get Random Quote:</h2>
            <button onClick={()=>{
                getRandomQuote()
            }}>
                Get Quote
            </button>
                {randomQuote
                ?<Quote quote={randomQuote}/>
                : null
                }
        </>
    )
}
export default RandomQuote