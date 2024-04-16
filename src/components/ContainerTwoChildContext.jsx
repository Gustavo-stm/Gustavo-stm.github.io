import { useState, useEffect } from 'react'
import { DndContext, useDroppable } from '@dnd-kit/core'
import {
    restrictToVerticalAxis,
} from '@dnd-kit/modifiers';



function ContainerTwoChildContext({ containerIndexes, listeners, attributes, secondItems, secondIndexes, handleSecondStart, handleDragEnd }) {

    const [stylesClass, setStyleClass] = useState('')

    const { setNodeRef } = useDroppable({
        id: 'droppable2',
        data: {
            type: 'type4',
        },
    });

    useEffect(() => {
        if (containerIndexes != undefined) {
            setStyleClass(containerIndexes[1] === 1 ? 'aside-sections' : 'extra-aside-styles')
        }
    }, [containerIndexes])

    return (<div {...listeners} {...attributes}>
        <DndContext modifiers={[restrictToVerticalAxis]} onDragStart={handleSecondStart} onDragEnd={handleDragEnd}>
            <div style={{ padding: '30px' }} className={stylesClass} id="aside-sections" ref={setNodeRef}>
                {secondIndexes && secondIndexes.map((ind) => { return secondItems[ind] })
                }
            </div>
        </DndContext>
    </div>)
}

export default ContainerTwoChildContext