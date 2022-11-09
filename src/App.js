import './App.scss';

import {createElement, useMemo, useState} from 'react';
import IntroScreen from './stages/IntroScreen';
import CatClass from './stages/CatClass';
import GameSolutions from './setup/brain';
import BgColorText from './stages/BgColorText';
import ExpandClass from './stages/ExpandClass';
import ConsoleLog from './stages/ConsoleLog';
import HiddenButton from './stages/HiddenButton';
import EndingScreen from './setup/EndingScreen';
import NeonCube from './setup/NeonCube';
import HintBtn from './setup/HintBtn';
import ScrollIntoView from './stages/ScrollIntoView';

function App() {
    const [stageNum, setStageNum] = useState(0);
    const [animateSuccess, setAnimateSuccess] = useState(false);
    const [hint, setHint] = useState(false);
    const [hintsClicked, setHintsClicked] = useState(0);

    const stagesArr = useMemo(() => {
        return [IntroScreen, CatClass, BgColorText, ExpandClass, ConsoleLog, HiddenButton, ScrollIntoView, EndingScreen];
        // return [IntroScreen, ScrollIntoView, EndingScreen];
    }, [])

    const solutions = useMemo(() => {
        return GameSolutions();
    }, []);

    const changeStage = () => {
        const betweenStageTransition = new Promise((resolve) => {
            setAnimateSuccess(true);
            setTimeout(() => {
                resolve('Counted');
            }, 2400);
        });

        betweenStageTransition
            .then(() => {
                setHint(false);
                setAnimateSuccess(false);
                setStageNum(stageNum + 1);
            })
    }

    const props = {
        solution: solutions[stageNum],
        cb: changeStage,
        hint
    }

    return (
        <div className="container h-100 d-flex flex-column">
            <h1 className="text-center animate-title">The Frontend Game</h1>
            <p>{stageNum > 0 ? `Stage ${stageNum} of ${stagesArr.length - 1}` : ''}</p>
            <section className={'animate-content pt-4'}>
                <hr/>
                {animateSuccess ?
                    <NeonCube hintsClicked={hintsClicked}/> :
                    createElement(stagesArr[stageNum], props)
                }
            </section>
            {stagesArr.length - 1 !== stageNum ?
                <HintBtn setHint={setHint}
                         setHintsClicked={setHintsClicked}
                         hintsClicked={hintsClicked}
                         hint={hint}/>
                : ''
            }
        </div>
    );
}

export default App;
