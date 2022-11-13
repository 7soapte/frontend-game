import './App.scss'

import {createElement, useMemo, useState} from 'react'
import IntroScreen from './stages/IntroScreen'
import GameSolutions from './setup/brain'
import EndingScreen from './stages/EndingScreen'
import NeonCube from './setup/NeonCube'
import HintBtn from './setup/HintBtn'
import ClipBoard from './stages/ClipBoard'
import ScrollIntoView from './stages/ScrollIntoView'
import BgColorText from './stages/BgColorText'
import ExpandClass from './stages/ExpandClass'
import CatClass from './stages/CatClass'
import ConsoleLog from './stages/ConsoleLog'
import HiddenButton from './stages/HiddenButton'
import AnswerInCookie from './stages/AnswerInCookie'
import SubmitAnswerBtnMoving from './stages/SubmitAnswerBtnMoving'

function App() {
    const [stageNum, setStageNum] = useState(0)
    const [animateSuccess, setAnimateSuccess] = useState(false)
    const [hint, setHint] = useState(false)
    const [hintsClicked, setHintsClicked] = useState(0)

    const stagesArr = useMemo(() => {
        return [
            IntroScreen,
            BgColorText,
            ExpandClass,
            ScrollIntoView,
            CatClass,
            ConsoleLog,
            HiddenButton,
            ClipBoard,
            AnswerInCookie,
            SubmitAnswerBtnMoving,
            EndingScreen,
        ]
        // return [IntroScreen, SubmitAnswerBtnMoving, EndingScreen]
    }, [])

    const solutions = useMemo(() => {
        return GameSolutions(stagesArr.length)
    }, [stagesArr])

    const props = useMemo(() => {
        const changeStage = () => {
            const betweenStageTransition = new Promise((resolve) => {
                setAnimateSuccess(true)
                setTimeout(() => {
                    resolve('Counted')
                }, 2400)
            })

            betweenStageTransition.then(() => {
                setHint(false)
                setAnimateSuccess(false)
                setStageNum(stageNum + 1)
            })
        }

        return {
            solution: solutions[stageNum],
            cb: changeStage,
            hint,
            hintsClicked,
        }
    }, [hint, solutions, stageNum, hintsClicked])

    return (
        <div className="container h-100 d-flex flex-column">
            <h1 className="text-center animate-title">The Frontend Game</h1>
            <p>
                {stageNum > 0 && stageNum < stagesArr.length - 2
                    ? `Stage ${stageNum} of ${stagesArr.length - 2}`
                    : null}
            </p>
            <section className={'animate-content pt-4'}>
                <hr />
                {animateSuccess ? (
                    <NeonCube hintsClicked={hintsClicked} />
                ) : (
                    createElement(stagesArr[stageNum], props)
                )}
            </section>
            {animateSuccess || stagesArr.length - 1 === stageNum ? null : (
                <HintBtn
                    setHint={setHint}
                    setHintsClicked={setHintsClicked}
                    hintsClicked={hintsClicked}
                    hint={hint}
                />
            )}
        </div>
    )
}

export default App
