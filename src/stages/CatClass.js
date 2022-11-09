import SubmitAnswerTemplate from '../setup/SubmitAnswerTemplate';

function CatClass({cb, solution, hint}) {

    return (
        <>
            <div className="animate-title">
                <h4><span className="badge bg-gradient me-2">Riddle</span>The cat's class has the answer <span
                    className={'The answer is: ' + solution}>🙀</span></h4>
            </div>
            {hint ?
                <>
                    <p><code>Right click the cat icon from the riddle text -> inspect -> in the developer tools you'll
                        see the answer in the
                        element's class.</code></p>
                </>
                : ''}
            <hr/>
            <SubmitAnswerTemplate cb={cb} solution={solution}/>
        </>
    );
}

export default CatClass;
