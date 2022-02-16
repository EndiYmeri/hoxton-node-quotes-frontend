import { QuoteType } from "../App"
import Quotes from "../components/Quotes"
import RandomQuote from "../components/RandomQuote"

type Params = {
    quotes: QuoteType[]
}

function Home({quotes}:Params){
    return(
        <>
          <RandomQuote/>
            <Quotes quotes={quotes} />
      
      </>
    )
}
export default Home