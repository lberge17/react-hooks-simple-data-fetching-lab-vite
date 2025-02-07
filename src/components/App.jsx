import { useEffect, useState } from 'react';

const App = () => {
    const [imageUrl, setImageUrl] = useState("")
    const [loading, setLoading] = useState(true)

    const fetchDog = () => {
        setLoading(true)
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => {
            setImageUrl(data.message)
            setLoading(false)
        })
    }

    useEffect(fetchDog, [])

    return (
        <div>
            {loading ? <p>Loading...</p> : <img src={imageUrl} alt="A Random Dog" />}
            <button aria-label="new dog" onClick={fetchDog}>Change Dog</button>
        </div>
    );
}

export default App;
