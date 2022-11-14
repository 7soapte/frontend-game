import SubmitAnswerTemplate from '../setup/SubmitAnswerTemplate'
import './BossStage10.scss'
import {useState} from 'react'
import Notification from '../setup/Notification'

function BossStage10({cb, solution, hint}) {
    const [showEyes, setShowEyes] = useState(false)
    const [closeEyes, setCloseEyes] = useState(false)
    const [bossDead, setBossDead] = useState(false)
    const [answer, setAnswer] = useState('')
    const [hasError, setHasError] = useState(false)
    const [leftEyeNotif, setLeftEyeNotif] = useState(false)
    const [leftEyeClicked, setLeftEyeClicked] = useState(false)
    const [rightEyeOverlay, setRightEyeOverlay] = useState(false)

    const bossInit = () => {
        if (answer === 'help!') {
            console.clear();
            console.error(
                "This isn't supposed to happen, check the global variable GAME_SYSTEM."
            )
            window.GAME_SYSTEM = 'Click the left eye!'
            setShowEyes(true)
        } else {
            setHasError(true)
        }
    }

    const handleLeftEyeClick = () => {
        setLeftEyeClicked(true)
        setLeftEyeNotif(true)
        window.GAME_SYSTEM = 'Click the right eye.'
    }

    const handleRightEyeOverlay = () => {
        if (leftEyeClicked) setRightEyeOverlay(true)
    }

    const handleRightEyeClicked = () => {
        setCloseEyes(true)
        setBossDead(true)
        console.log(
            `%c The answer is "${solution}".`,
            'background: #222; color: #bada55'
        )
    }

    return (
        <>
            <div className="animate-title">
                <h4>
                    <span className="badge bg-gradient me-2">Riddle</span>
                    {bossDead ? (
                        'Interface reset. Console updated.'
                    ) : showEyes ? (
                        <span className="text-danger">Error generated.</span>
                    ) : (
                        'You feel an evil presence, try entering this "help!".'
                    )}
                </h4>
            </div>
            {hint && !bossDead ? (
                <p>
                    {showEyes ? (
                        <span className="text-danger">
                            Nobody's here to help you.
                        </span>
                    ) : (
                        <code>Type "help!" in the input and submit it.</code>
                    )}
                </p>
            ) : (
                ''
            )}
            <hr />
            {showEyes ? (
                <div className={'eyes' + (closeEyes ? ' close-eyes' : '')}>
                    <div
                        className={'eye-socket1'}
                        onClick={() => handleLeftEyeClick()}
                    >
                        <span className="retina"></span>
                    </div>
                    <div
                        className="right-eye-shield"
                        onClick={() => handleRightEyeOverlay()}
                    ></div>
                    <div
                        className={'eye-socket2'}
                        onClick={() => handleRightEyeClicked()}
                    >
                        <span className="retina"></span>
                    </div>
                </div>
            ) : null}

            {!showEyes && !bossDead ? (
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3">
                        <div className="input-group animate-content mx-auto">
                            <input
                                type="text"
                                className={
                                    'form-control' + (hasError ? ' danger' : '')
                                }
                                placeholder="Write your answer here..."
                                aria-label="Write in your answer to the riddle"
                                aria-describedby="answer-btn"
                                value={answer}
                                onKeyDown={(e) =>
                                    e.key === 'Enter' && bossInit()
                                }
                                onChange={(e) => {
                                    setAnswer(e.target.value)
                                    setHasError(false)
                                }}
                            />
                            <button
                                className={
                                    'btn btn-success' +
                                    (hasError
                                        ? ' btn-danger shadow-sm'
                                        : ' border-light')
                                }
                                type="button"
                                id="answer-btn"
                                onClick={() => bossInit()}
                            >
                                Submit answer
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
            {leftEyeNotif ? (
                <Notification
                    text={'GAME_SYSTEM updated...'}
                    cb={setLeftEyeNotif}
                />
            ) : null}
            {rightEyeOverlay ? (
                <Notification
                    text={"There's some kind of invisible shield here."}
                    cb={setRightEyeOverlay}
                />
            ) : null}
            {bossDead ? (
                <SubmitAnswerTemplate cb={cb} solution={solution} />
            ) : null}
        </>
    )
}

export default BossStage10
