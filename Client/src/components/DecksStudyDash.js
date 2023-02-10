import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import DeckPreview from './DeckPreview';
import NewDeck from './NewDeck'
// import DeckPreview from './DeckPreview'

const DecksStudyDash = () => {    
    
    const { user, getAccessTokenSilently } = useAuth0();
    const [returnedDecks, setReturnedDecks] = useState([]);
    const [fetchDecks, setFetchDecks] = useState(true)
    const decks = []
    console.log('parent rendered')

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
                    setFetchDecks(false)
                    setReturnedDecks(data['decks'])
                    console.log(fetchDecks)
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
            }
    
    function refreshDecks(val) {
        console.log('Refresh callback triggered')
        setFetchDecks(true)
    }

    if(fetchDecks === true){
        getDecks(user)
    }

    // fetch decks from db

    // useEffect(() => {
    //     const getDecks = async (user) => {
    //         try {
    //             const accessToken = await getAccessTokenSilently()
    //             const response = await fetch(`/deck/${user.sub}`, {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-type': 'application/json',
    //                     Authorization: `Bearer ${accessToken}`,
    //                 },
    //             })
    //             const data = await response.json()
    //             setReturnedDecks(data['decks'])
    //             console.log(user.sub)
    //             console.log(data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
        
    //     getDecks(user);
    // }, [user, getAccessTokenSilently])


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
            <NewDeck 
            reload = {refreshDecks}/>
            {decks}
       </section> 
  )
}

export default DecksStudyDash;