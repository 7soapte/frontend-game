import SubmitAnswerTemplate from '../setup/SubmitAnswerTemplate'
import {useEffect, useState} from 'react'

function ScrollIntoView({cb, solution, hint}) {
    const [triggerAnswer, setTriggerAnswer] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY + window.innerHeight
            if (position > window.innerHeight + 500 && !triggerAnswer) {
                window.removeEventListener('scroll', handleScroll)
                setTriggerAnswer(true)
            }
        }

        if (!triggerAnswer)
            window.addEventListener('scroll', handleScroll, {passive: true})

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [triggerAnswer])

    return (
        <>
            <div style={{height: '4000px'}}>
                <div className="animate-title">
                    <h4>
                        <span className="badge bg-gradient me-2">Riddle</span>
                        Wheel me up, Scotty!
                    </h4>
                </div>
                {hint ? (
                    <p>
                        <code>Scroll the page</code>
                    </p>
                ) : (
                    ''
                )}
                <hr />
                <SubmitAnswerTemplate cb={cb} solution={solution} />
                {triggerAnswer ? (
                    <p className={'text-success mt-4'}>
                        The answer is: "{solution}"
                    </p>
                ) : (
                    ''
                )}
            </div>
            <p>Good job scrolling but your answer isn't here!</p>
        </>
    )
}

export default ScrollIntoView
