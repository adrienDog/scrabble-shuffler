import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './Constants';

import Letter from './SmartLetter';

const style = {
    display: 'inline-block',
    cursor: 'move',
};
export const Card = ({ id, text, index, moveCard }) => {
    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.LETTER,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleX = (hoverBoundingRect.left - hoverBoundingRect.right) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the right
            const hoverClientX = clientOffset.x - hoverBoundingRect.right;
            // Only perform the move when the mouse has crossed half of the items width
            // When dragging left, only move when the cursor is below 50%
            // When dragging right, only move when the cursor is above 50%
            // Dragging left
            if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
                return;
            }
            // Dragging right
            if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
                return;
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.LETTER,
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return (
      <div 
        ref={ref} 
        style={{ ...style, opacity }} 
        data-handler-id={handlerId}
      >
			  <Letter character={text}/>
		  </div>
    );
};
