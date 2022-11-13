import SubmitAnswerTemplate from '../setup/SubmitAnswerTemplate'

function ExpandClass({cb, solution, hint}) {
    return (
        <>
            <div className="animate-title">
                <h4>
                    <span className="badge bg-gradient me-2">Riddle</span>The
                    answer is still here 👇 but not displayed.
                </h4>
            </div>
            <span className="expand-me-to-see-the-answer d-none animate-content">
                The answer is: "{solution}"
            </span>
            {hint ? (
                <p>
                    <code>
                        Right click on the page -> inspect -> in the developer
                        tools look for the "expand-me-to-see-the-answer" class
                        and expand the element containing it.
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

export default ExpandClass
