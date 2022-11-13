import {useEffect} from 'react'
import SubmitAnswerTemplate from '../setup/SubmitAnswerTemplate'

function AnswerInCookie({cb, solution, hint}) {
    useEffect(() => {
        document.cookie = `the_answer_is=${solution}`
        return () => {
            document.cookie = ''
        }
    })

    return (
        <>
            <div className="animate-title">
                <h4>
                    <span className="badge bg-gradient me-2">Riddle</span>
                    You received a cookie for your hard work.
                </h4>
            </div>
            {hint ? (
                <p>
                    <code>
                        Go to your console and check your cookie with "document.cookie".
                    </code>
                </p>
            ) : (
                ''
            )}
            <hr />
            <SubmitAnswerTemplate cb={cb} solution={solution} />
        </>
    )
}

export default AnswerInCookie
