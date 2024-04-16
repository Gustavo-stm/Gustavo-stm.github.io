
import { DndContext, useDroppable, DragOverlay } from '@dnd-kit/core'
import {
  restrictToVerticalAxis,
  restrictToHorizontalAxis
} from '@dnd-kit/modifiers';

import './assets/style.css'

import React, { useEffect, useState, useRef } from 'react';
import ContainerOne from './components/ContainerOne'
import ContainerTwo from './components/ContainerTwo'
import About from './components/About';
import Latest from './components/Latest';
import Experience from './components/Experience';
import Header from './Header';
import BasicInfo from './components/BasicInfo';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Languages from './components/Languages';
import Footer from './Footer';

type AppProps = {};

const App: React.FC<AppProps> = () => {

  const [activeId, setActiveId] = useState<number | null>(null);
  const [secondActiveId, setSecondActiveId] = useState<number | null>(null);
  const containerActiveId = useRef<number | null>(null);

  const [items, setItems] = useState<React.ReactNode[]>([<About />, <Latest />, <Experience />])
  const [secondItems, setSecondItems] = useState<React.ReactNode[]>([<BasicInfo />, <Skills />, <Testimonials />, <Education />, <Languages />])
  const [containerItems, setContainerItems] = useState<React.ReactNode[]>([<ContainerOne />, <ContainerTwo />])

  const [indexes, setIndexes] = useState<number[]>([0, 1, 2])
  const [secondIndexes, setSecondIndexes] = useState<number[]>([0, 1, 2, 3, 4])
  const [containerIndexes, setContainerIndexes] = useState<number[]>([0, 1])

  function handleContainerDragStart(event: any) {
    containerActiveId.current = event.active.id;

  }

  function handleContainerDragEnd(event: any) {
    let deltaX = event.delta.x

    if (deltaX > 0) {
      if (containerActiveId.current === 1) {
        setContainerIndexes([1, 0])
      }
      else {
        setContainerIndexes([0, 1])
      }
    }

    else {
      if (containerActiveId.current === 1) {
        setContainerIndexes([0, 1])
      }
      else {
        setContainerIndexes([1, 0])
      }
    }
  }


  function handleDragStart(event: any) {
    setActiveId(event.active.id);
    console.log(event)

  }

  function handleDragEnd(event: any) {

    let deltaY = event.delta.y
    let draggableFinalIndex: number;
    let contHeight = 1000

    let theIndexes = event.active.data.current.supports === 'type3' ?
      indexes :
      secondIndexes

    let newIndexes = [...theIndexes]

    if (deltaY < 0) {

      let diff = contHeight + deltaY

      theIndexes.forEach((ind, i) => {
        if (ind + 1 === activeId && event.active.data.current.supports === 'type3') {
          newIndexes.splice(i, 1)

          draggableFinalIndex = diff > 400 ? i - 2 : diff > 200 ? i - 1 : i
          newIndexes.splice(draggableFinalIndex, 0, ind)
        }
        else if (ind + 5 === secondActiveId && event.active.data.current.supports === 'type4') {
          alert(secondActiveId + ' ' + ind)

          newIndexes.splice(i, 1)
          draggableFinalIndex = diff > 900 ? i : diff > 600 ? i - 1 : diff > 500 ? i - 2 : diff > 400 ? i - 3 : i - 4
          alert(draggableFinalIndex + ' ' + ind)
          newIndexes.splice(draggableFinalIndex, 0, ind)
        }
      })

      if (event.active.data.current.supports === 'type3') {
        setIndexes(newIndexes)
      }
      else {
        alert(newIndexes)
        setSecondIndexes(newIndexes)
      }
    }

    else {

      let diff = contHeight - deltaY

      theIndexes.forEach((ind, i) => {
        if (ind + 1 === activeId && event.active.data.current.supports === 'type3') {
          newIndexes.splice(i, 1)
          draggableFinalIndex = diff > 400 ? i : diff > 200 ? i + 1 : i + 2
          newIndexes.splice(draggableFinalIndex, 0, ind)
        }
        else if (ind + 4 === secondActiveId && event.active.data.current.supports === 'type4') {
          newIndexes.splice(i, 1)
          draggableFinalIndex = diff > 400 ? i : diff > 200 ? i + 1 : i + 2
          newIndexes.splice(draggableFinalIndex, 0, ind)
        }
      })

      if (event.active.data.current.supports === 'type3') {

        setIndexes(newIndexes)
      }
      else {
        setSecondIndexes(newIndexes)
      }
    }
  }

  const handleSecondStart = (event: any) => {
    setSecondActiveId(event.active.id);
  }

  useEffect(() => {

    const randomKey1 = Math.floor(Math.random() * 100000)
    const randomKey2 = Math.floor(Math.random() * 100000)

    if (containerIndexes.length > 0) {
      setContainerItems([<ContainerOne key={randomKey1} containerIndexes={containerIndexes} items={items} containerActiveId={containerActiveId} indexes={indexes} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} />,
      <ContainerTwo key={randomKey2} containerIndexes={containerIndexes} secondItems={secondItems} containerActiveId={containerActiveId} secondIndexes={secondIndexes} handleSecondStart={handleSecondStart} handleDragEnd={handleDragEnd} />
      ])
    }
  }, [containerIndexes, indexes, secondIndexes])


  return (
    <>
      <Header />
      <div className="main-container sections-wrapper">
        <div className="row" >
          <DndContext modifiers={[restrictToHorizontalAxis]} onDragStart={handleContainerDragStart} onDragEnd={handleContainerDragEnd}>
            {containerIndexes && containerIndexes.map(ind => {

              return containerItems[ind]
            }
            )}

          </DndContext>
        </div >
      </div>
      < Footer />
    </>
  )
}

export default App
