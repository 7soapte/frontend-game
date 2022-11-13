import './HiddenButton.scss'
import {useState} from 'react'
import SubmitAnswerTemplate from '../setup/SubmitAnswerTemplate'

function HiddenButton({cb, solution, hint}) {
    const [btnAnswer, setBtnAnswer] = useState(false)

    const showAnswer = () => {
        setBtnAnswer(true)
    }

    return (
        <>
            <div className="animate-title">
                <h4>
                    <span className="badge bg-gradient me-2">Riddle</span>Click
                    the button that's not displayed.
                </h4>
            </div>
            {hint ? (
                <>
                    <p>
                        <code>
                            Inspect the page, look for the element that tells
                            you to remove its class text.
                        </code>
                    </p>
                    <p>
                        <code>
                            Delete its class -> 2x left click on
                            "remove-this-text" - delete - enter
                        </code>
                    </p>
                    <p>
                        <code>
                            Click the button that's now visible in the page.
                        </code>
                    </p>
                </>
            ) : (
                ''
            )}
            <hr />
            <SubmitAnswerTemplate cb={cb} solution={solution} />
            <div className={'remove-this-text'}>
                <button
                    onClick={() => showAnswer()}
                    className={'btn btn-secondary my-3'}
                >
                    Click me for the answer
                </button>
            </div>
            {btnAnswer ? (
                <p className={'text-success'}>The answer is: "{solution}"</p>
            ) : (
                ''
            )}
        </>
    )
}

export default HiddenButton
