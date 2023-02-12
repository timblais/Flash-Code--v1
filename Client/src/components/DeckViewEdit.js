import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import CardListItem from './CardListItem';
import Button from './buttons/Button';
import CardDisplay from './CardDisplay';

const DeckViewEdit = ({ deckId }) => {
    const { user, getAccessTokenSilently } = useAuth0();
    const [returnedDeck, setReturnedDeck] = useState({});
    const [returnedCards, setReturnedCards] = useState([]);
    const [fetchDetails, setFetchDetails] = useState(0);
    const [cardDisplay, setCardDisplay] = useState({})
    const cards = []
    console.log(deckId)


    function showClickedCard(cardId, createdDate, dueDate, title, createdBy, deck, question, answer, repetitionNumber, easinessFactor, repetitionInterval, totalViews, ){
        console.log('click passed up')
        setCardDisplay({
            newCard: false,
            editCard: false,
            cardId: cardId,
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

    function createNewCard(){
        setCardDisplay({
            newCard: true,
            deck: deckId,
        })
    }
    
    // Callback for use in child newDeck form to refresh after submit
    function saveAndRefresh() {
        console.log('Refresh callback triggered')
        setFetchDetails(fetchDetails + 1)
        setCardDisplay({
            savedCard: true
        })
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
                console.log(data)
                setReturnedDeck(data['deck'])
                setReturnedCards(data['cards'])
            } catch (error) {
                console.log(error)
            }
        }
        
        getDeckDetails(user, deckId);
    }, [user, deckId, getAccessTokenSilently, fetchDetails])

    // iterate over array of cards and push preview components to array cards
    for (const card of returnedCards){
        cards.push(
            <CardListItem 
                cardId = {card['_id']}
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
        <section className="w-full flex flex-row justify-between items-start">
             <section className='px-8'>
                <h1>
                    {returnedDeck['title']}
                </h1>
                <Button
                    type = 'button'
                    name = 'New Card'
                    onClick = {createNewCard}
                />
                {cards}
             </section>
             <section className='px-8'>
                <CardDisplay 
                    newCard = {cardDisplay.newCard}
                    editCard = {cardDisplay.editCard}
                    savedCard = {cardDisplay.savedCard}
                    cardId = {cardDisplay.cardId}
                    createdDate = {cardDisplay.createdDate}
                    dueDate = {cardDisplay.dueDate}
                    title = {cardDisplay.title}
                    createdBy = {cardDisplay.createdBy}
                    deck = {cardDisplay.deck}
                    question = {cardDisplay.question}
                    answer = {cardDisplay.answer}
                    repetitionNumber = {cardDisplay.repetitionNumber}
                    easinessFactor = {cardDisplay.easinessFactor}
                    repetitionInterval = {cardDisplay.repetitionInterval}
                    totalViews = {cardDisplay.totalViews}
                    saveAndRefresh = {saveAndRefresh}
                />
             </section>

        </section> 
   )

}



export default DeckViewEdit;


