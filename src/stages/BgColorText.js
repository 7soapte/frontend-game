import SubmitAnswerTemplate from '../setup/SubmitAnswerTemplate';

function BgColorText({cb, solution, hint}) {

    return (
        <>
            <div className="animate-title">
                <h4><span className="badge bg-gradient me-2">Riddle</span>The answer is here 👇</h4>
                <span className="text-dark animate-content">The answer is: "{solution}"</span>
            </div>
            {hint ?
                <>
                    <p><code>Select all the text in the page from the riddle to this hint, the answer will show
                        itself.</code></p>
                </>
                : ''}
            <hr/>
            <SubmitAnswerTemplate cb={cb} solution={solution}/>
        </>
    );
}

export default BgColorText;
