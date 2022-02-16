import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { QuoteType } from "../App"
import Quote from "../components/Quote"

type AuthorType={
    id:number,
    firstName: string,
    lastName: string,
    age: number,
    image:string,
    quotes: QuoteType[]
}

function SingleAuthor(){

    const [author, setAuthor] = useState<AuthorType>()
    const params = useParams()

    const authorID = Number(params.id)

    useEffect(()=>{
        fetch(`http://localhost:5000/authors/${authorID}`)
        .then(resp =>resp.json())
        .then(author => setAuthor(author))
    },[])
    return(
        <div className="singleAuthor">
            <div className="authorInfo">
                <img src={author?.image} alt="" />
                <div className="authorName">
                    {author?.firstName + " " + author?.lastName}
                    <div>
                        {author?.age}
                    </div>
                </div>
            </div>
            <div className="authorQuotes">
                <ul>
                {author?.quotes.map(quote=>{
                        return(
                            <li key={quote.id} className="quote" >{quote.text}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
        )

}
export default SingleAuthor