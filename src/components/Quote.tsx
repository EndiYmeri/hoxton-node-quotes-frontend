import { useNavigate } from 'react-router-dom'
import { QuoteType } from '../App'

type Params={
    quote: QuoteType
}

 function Quote({quote}:Params){
    const navigate = useNavigate()

    return(
        <li 
          className='quote' 
          onClick={()=>{
            navigate(`/quotes/${quote.id}`)
          }} 
          key={quote.id}>
          <p>
          "{ quote.text}"
          </p>
          <div className="authorInfo">
            <img src={quote.image} alt="" /> 
            <div className='authorName'>{quote.author}<div>Age:{quote.age}</div> </div>  
          </div>        
      </li>
    )
}

export default Quote


