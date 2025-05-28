import { useState } from 'react'
import Button from './button'

const Jokes = () => {
    const [joke, setJoke] = useState("");
    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((res) => res.json())
        .then((data) => setJoke(data.joke));
    }
    return(
        <div>
            <p>{joke}</p>
            <Button callApi={fetchApi}/>
            </div>
    )
}

export default Jokes;