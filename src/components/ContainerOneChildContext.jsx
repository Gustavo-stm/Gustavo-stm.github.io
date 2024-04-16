
import { DndContext, useDroppable } from '@dnd-kit/core'
import {
    restrictToVerticalAxis,
} from '@dnd-kit/modifiers';
import { useEffect, useState } from 'react';


function ContainerOneChildContext({ containerIndexes, listeners, attributes, items, indexes, handleDragStart, handleDragEnd }) {

    const [stylesClass, setStyleClass] = useState('')

    const { setNodeRef } = useDroppable({
        id: 'droppable',
        data: {
            type: 'type3',
        },
    });

    useEffect(() => {
        if (containerIndexes != undefined) {
            setStyleClass(containerIndexes[0] === 0 ? 'first-sections' : 'extra-sections-styles')
        }
    }, [containerIndexes])

    useEffect(() => {
        console.log(indexes)
    }, [indexes])


    return (<div {...listeners} {...attributes}>
        <DndContext modifiers={[restrictToVerticalAxis]} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div style={{ padding: '30px' }} className={stylesClass} ref={setNodeRef} id="drag-container">
                {indexes && indexes.map((ind) => { return items[ind] })
                }
            </div>
        </DndContext>
    </div>)
}

export default ContainerOneChildContext