import { QuoteType } from '../App'
type Params={
    quote: QuoteType
}
 function Quote({quote}:Params){

    return(
        <li 
          className='quote' 
          
          key={quote.id}>
          <a href={`/quotes/${quote.id}`}>
              <p>
              "{ quote.text}"
              </p>
          </a>
          <div className="authorInfo">
            <img src={quote.authorImage} alt="" /> 
            <div className='authorName'>
                <a href={`/authors/${quote.authorId}`}>{quote.author}</a>
                <div>Age:{quote.authorAge}</div> 
            </div>  
          </div>        
      </li>
    )
}

export default Quote


