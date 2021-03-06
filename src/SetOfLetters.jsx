import { useState, useCallback } from 'react';
import { Card } from './Card';
import update from 'immutability-helper';

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  width: '100%',
};

const SetOfLetters = ({letters, onReordered}) => {
  const arrayOfLetters = letters
    .split('')
    .map((text, index) => ({text, id: index + 1}));
  const [cards, setCards] = useState(arrayOfLetters);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];
      const updatedCards = update(cards, {
        $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
        ],
      });
      setCards(updatedCards);
      onReordered(updatedCards.map((c) => c.text).join(''));
  }, [cards, onReordered]);
  const renderCard = (card, index) => {
      return (<Card key={card.id} index={index} id={card.id} text={card.text} moveCard={moveCard}/>);
  };
  
  return (<>
    <div style={style}>
      {cards.map((card, i) => renderCard(card, i))}
    </div>
  </>);
};

export default SetOfLetters;