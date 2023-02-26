import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import StudyPreview from './StudyPreview';

const StudyDash = () => {    
    
    const { user, getAccessTokenSilently } = useAuth0();
    const [returnedDecksWithCards, setReturnedDecksWithCards] = useState([]);
    // const [fetchDecks, setFetchDecks] = useState(0)
    const decksAndCards = []
    
    // Callback for use in child newDeck form to refresh after submit
    // function refreshDecks() {
    //     console.log('Refresh callback triggered')
    //     setFetchDecks(fetchDecks + 1)
    // }

    // fetch decks from db
    useEffect(() => {
        const getDecks = async (user) => {
            try {
                const accessToken = await getAccessTokenSilently()
                const response = await fetch(`/deck/byuserwithcardsdue/${user.sub}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                const data = await response.json()
                // create an array of returned deck objects
                setReturnedDecksWithCards(data['decksAndCards'])
            } catch (error) {
                console.log(error)
            }
        }
        
        getDecks(user);
    }, [user, getAccessTokenSilently,])

    // iterate over array of decks and push preview components to array decks
    for (const deck in returnedDecksWithCards){ 
        decksAndCards.push(
            <StudyPreview 
                deckId = {returnedDecksWithCards[deck][0]['_id']}
                deckName = {returnedDecksWithCards[deck][0]['title']}
                totalCards = {returnedDecksWithCards[deck][0]['totalCards']}
                cardArray = {returnedDecksWithCards[deck][1]}
            />
        )
    }
    
    return (
       <section>
            {decksAndCards}
       </section> 
  )
}

export default StudyDash;