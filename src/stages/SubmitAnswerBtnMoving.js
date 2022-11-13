import {useRef, useState} from 'react'

function SubmitAnswerBtnMoving({cb, solution, hint}) {
    const [answer, setAnswer] = useState('')
    const [hasError, setHasError] = useState(false)
    const [keepSwapping, setKeepSwapping] = useState({
        swap: false,
        left: false,
        right: true,
    })
    const submitBtn = useRef(null)

    function checkAnswer() {
        if (solution === answer) {
            setHasError(false)
            cb()
            return
        }

        setHasError(true)
    }

    function swapBtn() {
        if (keepSwapping.swap) {
            setKeepSwapping({
                ...keepSwapping,
                left: !keepSwapping.left,
                right: !keepSwapping.right,
            })
        }
    }

    return (
        <>
            <div className="animate-title">
                <h4>
                    <span
                        className="badge bg-gradient me-2"
                        style={{cursor: 'pointer'}}
                        onClick={() =>
                            setKeepSwapping({
                                ...keepSwapping,
                                swap: !keepSwapping.swap,
                            })
                        }
                    >
                        Riddle
                    </span>
                    {keepSwapping.swap
                        ? 'The answer is: ' + solution
                        : 'The riddle has the answer'}
                    .
                </h4>
            </div>
            {hint ? (
                <p>
                    <code>
                        Go to your console and check your cookie with
                        "document.cookie".
                    </code>
                </p>
            ) : (
                ''
            )}
            <hr />
            <div className="row">
                <div className="col-12 col-md-6 offset-md-3">
                    <div className="input-group animate-content mx-auto">
                        {keepSwapping.left ? (
                            <button
                                className={
                                    'btn btn-success' +
                                    (hasError
                                        ? ' btn-danger shadow-sm'
                                        : ' border-light')
                                }
                                type="button"
                                ref={submitBtn}
                                onClick={() => checkAnswer()}
                                onMouseMove={() => swapBtn()}
                            >
                                Submit answer
                            </button>
                        ) : null}
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
                                e.key === 'Enter' && checkAnswer()
                            }
                            onChange={(e) => {
                                setAnswer(e.target.value)
                                setHasError(false)
                            }}
                        />
                        {keepSwapping.right ? (
                            <button
                                className={
                                    'btn btn-success' +
                                    (hasError
                                        ? ' btn-danger shadow-sm'
                                        : ' border-light')
                                }
                                type="button"
                                ref={submitBtn}
                                onClick={() => checkAnswer()}
                                onMouseMove={() => swapBtn()}
                            >
                                Submit answer
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubmitAnswerBtnMoving
