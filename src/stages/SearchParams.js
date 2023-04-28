import SubmitAnswerTemplate from '../setup/SubmitAnswerTemplate'

function SearchParams({cb, solution, hint}) {
    window.history.replaceState(null, null, `?answer_is=${solution}`)

    return (
        <>
            <div className="animate-title">
                <h4>
                    <span className="badge bg-gradient me-2">Riddle</span>
                    <span>Search for the answer</span>
                </h4>
            </div>
            {hint ? (
                <p>
                    <code>
                        Check your URL, might see something interesting.
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

export default SearchParams
