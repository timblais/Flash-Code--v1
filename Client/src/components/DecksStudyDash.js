import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import DeckPreview from './DeckPreview';
import NewDeck from './NewDeck'
// import DeckPreview from './DeckPreview'

const DecksStudyDash = () => {    
    
    const [returnedDecks, setReturnedDecks] = useState([]);
    const { getAccessTokenSilently } = useAuth0();
    const decks = []

    // fetch decks from db

    useEffect(() => {
        const getDecks = async () => {
            try {
                const accessToken = await getAccessTokenSilently()
                const response = await fetch('/deck', {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                const data = await response.json()
                setReturnedDecks(data['decks'])
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        
        getDecks();
    }, [getAccessTokenSilently])


    for (const deck of returnedDecks){
        decks.push(
            <DeckPreview 
                deckName = {deck['title']}
                totalCards = {deck['totalCards']}
            />
        )
    }
    // create an array of returned deck objects
    // create variable to hold array of deckpreviews based on deck objects
    // render variable in return
    
    return (
       <section>
            <h1>
                My Decks
            </h1>
            <NewDeck />
            {decks}
       </section> 
  )
}

export default DecksStudyDash;