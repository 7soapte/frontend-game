import SubmitAnswerTemplate from '../setup/SubmitAnswerTemplate'
import {useState} from 'react'
import Notification from '../setup/Notification'

function ClipBoard({cb, solution, hint}) {
    const [notify, setNotify] = useState(false)

    return (
        <>
            <div className="animate-title">
                <h4>
                    <span className="badge bg-gradient me-2">Riddle</span>
                    <span
                        style={{cursor: 'pointer'}}
                        onClick={() => {
                            navigator.clipboard
                                .writeText(solution)
                                .then(() => null)
                            setNotify(true)
                        }}
                    >
                        Copy
                    </span>{' '}
                    & paste
                </h4>
            </div>
            {hint ? (
                <p>
                    <code>
                        Click the "Copy" word from the riddle -> answer will be
                        copied to your clipboard -> paste it into the answer.
                    </code>
                </p>
            ) : (
                ''
            )}
            <hr />
            <SubmitAnswerTemplate cb={cb} solution={solution} />
            {notify ? (
                <Notification text={'Something happened!'} cb={setNotify} />
            ) : (
                ''
            )}
        </>
    )
}

export default ClipBoard
