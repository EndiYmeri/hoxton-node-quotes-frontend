import { QuoteType } from "../App"
import Quote from "./Quote"

type Params={
    quotes:QuoteType[]
}

function Quotes({quotes}:Params){

    return (
        <>
          <h1>The Quotes</h1>
            <ul>
                {
                quotes.map(quote =>{
                    return(
                    <Quote quote={quote} />
                    ) 
                })
                }
            </ul>
        </>
    )
}
export default Quotes