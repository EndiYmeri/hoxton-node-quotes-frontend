import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { QuoteType } from "../App"
import Quote from "../components/Quote"

function SingleQuote(){
    const [quote, setQuote] = useState<QuoteType>()
    const params = useParams()

    const quoteID = Number(params.id)

    useEffect(()=>{
        fetch(`http://localhost:5000/quotes/${quoteID}`)
        .then(resp =>resp.json())
        .then(quote => setQuote(quote))
    },[])
    
    if(quote){
        return (
            <div className="singleQuote">
                <Quote quote={quote}/>
            </div>
        )
    }
    else{
        return (
            <h1>No Quote Found</h1>
        )
    }

    
}
export default SingleQuote