import { useState, useEffect } from 'react';
import StudyHeader from './StudyHeader';
import StudyBody from './StudyBody';
import { useAuth0 } from "@auth0/auth0-react";
import Loading from './Loading';


const ActiveStudy = ({ deckId }) => {
    const { user, getAccessTokenSilently } = useAuth0();
    const [returnedDeck, setReturnedDeck] = useState({});
    const [returnedCards, setReturnedCards] = useState(['']);

    // fetch deck and cards from db
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
                // set deck info and array of cards to be studied during this session
                let todaysCards = await data['cards'].filter(card => {
                    let tomorrow = new Date()
                    tomorrow.setHours(24,0,0,0)
                    let date = Date.parse(card['dueDate'])
                    return date <= tomorrow  
                })
                await todaysCards.sort((a,b) => Date.parse(a['dueDate']) - Date.parse(b['dueDate']))
                setReturnedDeck(data['deck'])
                setReturnedCards(todaysCards)
            } catch (error) {
                console.log(error)
            }
        }
        
        getDeckDetails(user, deckId);
    }, [user, deckId, getAccessTokenSilently,]);

    const updateCardArray = (cards) => {
        setReturnedCards(cards);
    };

    if(returnedCards === ['']){
        return(
            <Loading />
        )
    }else{
        return(
            <section className='w-full h-4/5'>
                <StudyHeader
                    deckName={returnedDeck['title']}
                    cardsRemaining={returnedCards.length}
                />
                <StudyBody
                    cardArray={returnedCards}
                    updateCardArray={updateCardArray}
                />
            </section>
        );
    }

};

export default ActiveStudy;


