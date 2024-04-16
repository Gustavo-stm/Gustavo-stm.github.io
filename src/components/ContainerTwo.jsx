import { useDraggable } from '@dnd-kit/core'
import React, { useState, useEffect } from 'react'
import ContainerTwoChildContext from './ContainerTwoChildContext'
import { CSS } from '@dnd-kit/utilities';

function ContainerTwo({ containerIndexes, containerActiveId, handleSecondStart, handleDragEnd, secondItems, secondIndexes }) {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 2,
        data: {
            supports: 'type2',
        },
    });

    const [style, setStyle] = useState({})

    useEffect(() => {

        if (containerActiveId) {
            if (containerActiveId.current === 2) {
                setStyle({
                    transform: CSS.Translate.toString(transform),
                    zIndex: 3000
                })
            }
            else {
                setStyle({
                    transform: CSS.Translate.toString(transform),
                    zIndex: 0
                })
            }
        }

    }, [containerActiveId?.current, transform])

    // const style = {
    //     transform: CSS.Translate.toString(transform),
    //     zIndex: containerActiveId === 2 ? 3000 : 1
    // };
    return (
        <div style={{ ...style, height: 'fit-content', padding: '30px', backgroundColor: 'lightgrey' }} ref={setNodeRef}>
            <ContainerTwoChildContext containerIndexes={containerIndexes} listeners={{ ...listeners }} attributes={{ ...attributes }}
                secondItems={secondItems} secondIndexes={secondIndexes}
                handleSecondStart={handleSecondStart} handleDragEnd={handleDragEnd} />
        </div>
    );
}

export default ContainerTwo