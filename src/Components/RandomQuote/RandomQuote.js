import React, {useState, useEffect, useRef}  from "react"
import "./random-quot.css"

function RandomQuote() {

    const [quotes, setQuotes] = useState("")
    const textRef = useRef();

    const colors = [
        "#d64728",
        "#a93226 ",
        "#5b2c6f",
        "#f1c40f",
        "#27ae60 ",
        "#27ae60 "
    ]

    const getQuote = () => {
        fetch("https://type.fit/api/quotes")
        .then(responde => responde.json())
        .then(data => {
            let randomNum = Math.floor(Math.random() * data.length)
            setQuotes(data[randomNum])
        })
    }

    useEffect(() => {
        getQuote();
    }, [])

    useEffect(() => {
        textRef.current.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    }, [quotes])

    return(
        <div
            className="random-quote-container"
            ref={textRef}>
            <h3>RandomQuote</h3>
            <div>
                <p>"{quotes.text}"</p>
                <p>{quotes.author ? 
                    "Author: "  + quotes.author 
                    : 
                    "Unknow"}
                </p>
                <div>
                    <button onClick={() => getQuote()}>New Quote</button>
                    <button>
                        <a
                            href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            Tweet
                        </a>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default RandomQuote