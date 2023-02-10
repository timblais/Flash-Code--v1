import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import CardListItem from './CardListItem';

const DeckViewEdit = ({ id }) => {
    const { user, getAccessTokenSilently } = useAuth0();
    const [returnedDeck, setReturnedDeck] = useState({});
    const [returnedCards, setReturnedCards] = useState([]);
    const [fetchDetails, setFetchDetails] = useState(0);
    const [showCard, setShowCard] = useState({})
    const cards = []


    function showClickedCard(id, createdDate, dueDate, title, createdBy, deck, question, answer, repetitionNumber, easinessFactor, repetitionInterval, totalViews, ){
        setShowCard({
            id: id,
            createdDate: createdDate, 
            dueDate: dueDate, 
            title: title, 
            createdBy: createdBy, 
            deck: deck, 
            question: question, 
            answer: answer, 
            repetitionNumber: repetitionNumber, 
            easinessFactor: easinessFactor, 
            repetitionInterval: repetitionInterval, 
            totalViews: totalViews, 
        })
    }
    
    // Callback for use in child newDeck form to refresh after submit
    function refreshDetails() {
        console.log('Refresh callback triggered')
        setFetchDetails(fetchDetails + 1)
    }

    // fetch decks from db
    useEffect(() => {
        const getDeckDetails = async (user, deckId) => {
            try {
                const accessToken = await getAccessTokenSilently()
                const response = await fetch(`/deck/bydeck/${user.sub}/${deckId}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                const data = await response.json()
                // create an array of returned deck objects
                setReturnedDeck(data['deck'])
                setReturnedCards(data['cards'])
            } catch (error) {
                console.log(error)
            }
        }
        
        getDeckDetails(user, id);
    }, [user, id, getAccessTokenSilently, fetchDetails])

    // iterate over array of cards and push preview components to array cards
    for (const card of returnedCards){
        cards.push(
            <CardListItem 
                id = {card['_id']}
                createdDate =  {card['createdDate']}
                dueDate = {card['dueDate']}
                title = {card['title']}
                createdBy = {card['createdBy']}
                deck = {card['deck']}
                question = {card['question']}
                answer = {card['answer']}
                repetitionNumber = {card['repetitionNumber']}
                easinessFactor = {card['easinessFactor']}
                repetitionInterval = {card['repetitionInterval']}
                totalViews = {card['totalViews']}
                displayThisCard = {showClickedCard}

            />
        )
    }

    return (
        <section>
             <h1>
                 {returnedDeck['title']}
             </h1>
             {cards}
        </section> 
   )

}



export default DeckViewEdit;


