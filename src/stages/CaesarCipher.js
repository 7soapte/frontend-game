import SubmitAnswerTemplate from '../setup/SubmitAnswerTemplate'
import {useEffect, useState} from 'react'
import Notification from '../setup/Notification'

function ClipBoard({cb, solution, hint}) {
    const [fakeAnswer, setFakeAnswer] = useState('')
    const [title, setTitle] = useState(`The answer is: ${solution}`)
    const [hasError, setHasError] = useState(false)
    const [showFake, setShowFake] = useState(true)
    const [notify, setNotify] = useState(false)

    const decryptionKey = 8

    const caesar = (plaintext, shift, reverse = false) => {
        if (reverse) shift = (26 - shift) % 26

        let rez = ''
        for (let i = 0; i < plaintext.length; i++) {
            let c = plaintext.charCodeAt(i)

            if (c >= 65 && c <= 90)
                rez += String.fromCharCode(((c - 65 + shift) % 26) + 65)
            else if (c >= 97 && c <= 122)
                rez += String.fromCharCode(((c - 97 + shift) % 26) + 97)
            else rez += plaintext.charAt(i)
        }
        return rez
    }

    const checkFakeAnswer = () => {
        if (+fakeAnswer !== decryptionKey) {
            setFakeAnswer('')
            setHasError(true)
            return
        }
        setNotify(true);
        setShowFake(false)
        setTitle(caesar(title, decryptionKey, true))
    }

    useEffect(() => {
        window.history.replaceState(
            null,
            null,
            `decryption_key=${decryptionKey}`
        )
        setTitle(caesar(title, decryptionKey))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    window.history.replaceState(null, null, '')

    return (
        <>
            <div className="animate-title">
                <h4>
                    <span className="badge bg-gradient me-2">Riddle</span>
                    <span>
                        Encoding...
                        <br /> {title}
                    </span>
                </h4>
            </div>
            {hint ? (
                <p>
                    <code>Inspect elements</code>
                </p>
            ) : (
                ''
            )}
            <hr />
            {showFake ? (
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3">
                        <div className="input-group animate-content mx-auto">
                            <input
                                type="text"
                                className={
                                    'form-control' + (hasError ? ' danger' : '')
                                }
                                placeholder="Write your decryption key..."
                                aria-label="Write in your answer to the riddle"
                                aria-describedby="answer-btn"
                                value={fakeAnswer}
                                onKeyDown={(e) =>
                                    e.key === 'Enter' && checkFakeAnswer()
                                }
                                onChange={(e) => {
                                    setFakeAnswer(e.target.value)
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
                                onClick={() => checkFakeAnswer()}
                            >
                                Decode
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <SubmitAnswerTemplate cb={cb} solution={solution} />
            )}
            {notify ? (
                <Notification text={'Message decoded!'} cb={setNotify} />
            ) : (
                ''
            )}
        </>
    )
}

export default ClipBoard
