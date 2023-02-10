import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import DeckPreview from './DeckPreview';
import NewDeck from './NewDeck'
// import DeckPreview from './DeckPreview'

const DecksStudyDash = () => {    
    
    const { user, getAccessTokenSilently } = useAuth0();
    const [returnedDecks, setReturnedDecks] = useState([]);
    const [fetchDecks, setFetchDecks] = useState(0)
    const decks = []
    
    // Callback for use in child newDeck form to refresh after submit
    function refreshDecks() {
        console.log('Refresh callback triggered')
        setFetchDecks(fetchDecks + 1)
    }

    // fetch decks from db
    useEffect(() => {
        const getDecks = async (user) => {
            try {
                const accessToken = await getAccessTokenSilently()
                const response = await fetch(`/deck/${user.sub}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                const data = await response.json()
                // create an array of returned deck objects
                setReturnedDecks(data['decks'])
            } catch (error) {
                console.log(error)
            }
        }
        
        getDecks(user);
    }, [user, getAccessTokenSilently, fetchDecks])

    // iterate over array of decks and push preview components to array decks
    for (const deck of returnedDecks){
        decks.push(
            <DeckPreview 
                deckName = {deck['title']}
                totalCards = {deck['totalCards']}
            />
        )
    }
    
    return (
       <section>
            <h1>
                My Decks
            </h1>
            <NewDeck 
            deckRefresh = {refreshDecks}/>
            {decks}
       </section> 
  )
}

export default DecksStudyDash;