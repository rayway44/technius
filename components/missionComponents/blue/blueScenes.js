import React from 'react'
import Scene5 from './scenes/scene5'
import Scene6 from './scenes/scene6'
import Scene7 from './scenes/scene7.js'
import Scene8 from './scenes/scene8.js'
import Scene9 from './scenes/scene9.js'
import Scene10 from './scenes/scene10.js'
import Scene11 from './scenes/scene11.js'
import Scene12 from './scenes/scene12.js'
import Scene13 from './scenes/scene13.js'
import Scene14 from './scenes/scene14.js'
import Scene15 from './scenes/scene15.js'
import Scene16 from './scenes/scene16.js'
import Scene17 from './scenes/scene17.js'


export default function BlueScenes({currentScene, setCurrentScene, chosenItems, setChosenItems, answers, setAnswers, setOpenStartOverDialog}) {

    const Scene = () => {
        if (currentScene === 5) {
            return <Scene5 setOpenStartOverDialog={setOpenStartOverDialog} currentScene={currentScene} setCurrentScene={setCurrentScene} chosenItems={chosenItems} setChosenItems={setChosenItems} />
        } else if (currentScene === 6) {
            return <Scene6 setOpenStartOverDialog={setOpenStartOverDialog} currentScene={currentScene} setCurrentScene={setCurrentScene} />
        } else if (currentScene === 7) {
            return <Scene7 setOpenStartOverDialog={setOpenStartOverDialog} currentScene={currentScene} setCurrentScene={setCurrentScene} />
        } else if (currentScene === 8) {
            return <Scene8 setOpenStartOverDialog={setOpenStartOverDialog} answers={answers} setAnswers={setAnswers} currentScene={currentScene} setCurrentScene={setCurrentScene} />
        } else if (currentScene === 9) {
            return <Scene9 setOpenStartOverDialog={setOpenStartOverDialog} answers={answers} setAnswers={setAnswers} currentScene={currentScene} setCurrentScene={setCurrentScene} />
        } else if (currentScene === 10) {
            return <Scene10 setOpenStartOverDialog={setOpenStartOverDialog} answers={answers} setAnswers={setAnswers} currentScene={currentScene} setCurrentScene={setCurrentScene} />
        } else if (currentScene === 11) {
            return <Scene11 setOpenStartOverDialog={setOpenStartOverDialog} answers={answers} setAnswers={setAnswers} currentScene={currentScene} setCurrentScene={setCurrentScene} />
        } else if (currentScene === 12) {
            return <Scene12 setOpenStartOverDialog={setOpenStartOverDialog} answers={answers} setAnswers={setAnswers} currentScene={currentScene} setCurrentScene={setCurrentScene} />
        } else if (currentScene === 13) {
            return <Scene13 setOpenStartOverDialog={setOpenStartOverDialog} answers={answers} setAnswers={setAnswers} currentScene={currentScene} setCurrentScene={setCurrentScene} />
        } else if (currentScene === 14) {
            return <Scene14 setOpenStartOverDialog={setOpenStartOverDialog} answers={answers} setAnswers={setAnswers} currentScene={currentScene} setCurrentScene={setCurrentScene} />
        } else if (currentScene === 15) {
            return <Scene15 setOpenStartOverDialog={setOpenStartOverDialog} answers={answers} setAnswers={setAnswers} currentScene={currentScene} setCurrentScene={setCurrentScene} />
        } else if (currentScene === 16) {
            return <Scene16 setOpenStartOverDialog={setOpenStartOverDialog} answers={answers} setAnswers={setAnswers} currentScene={currentScene} setCurrentScene={setCurrentScene} />
        } else if (currentScene === 17) {
            return <Scene17 setOpenStartOverDialog={setOpenStartOverDialog} answers={answers} setAnswers={setAnswers} currentScene={currentScene} setCurrentScene={setCurrentScene} />
        }
    }
    return (
        <>
            <Scene />
        </>
    )
}
