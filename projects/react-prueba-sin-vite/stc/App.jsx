import React, { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firsWord}?fontSize=50&fontColor=red&json=true`

export function App () {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT) // Hacemos fechin de datos
        .then(res => res.json()) // Cambiamos la respuesta a json
        .then(data => {
            const { fact } = data
            setFact(fact)
            const threeFirstWorld = fact.split(' ', 3).join(' ')
            console.log(threeFirstWorld)

            fetch(`https://cataas.com/cat/says/${threeFirstWorld}?fontSize=50&fontColor=red&json=true`)
                .then(res => res.json())
                .then(response => {
                    const { url } = response   
                    setImageUrl(url)               
                })

        }) 
    },[]) // Nos aseguramos de que solo se monta una vez

    return (
        <main>
            <h1>App de gatitos</h1> 
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image fron cataas.com API`} />}
        </main>
    )
}