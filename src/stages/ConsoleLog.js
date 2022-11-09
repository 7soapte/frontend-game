import {useEffect} from 'react';
import SubmitAnswerTemplate from '../setup/SubmitAnswerTemplate';

function ConsoleLog({cb, solution, hint}) {

    useEffect(() => {
        console.log('The answer is: ', solution);
    });

    return (
        <>
            <div className="animate-title">
                <h4><span className="badge bg-gradient me-2">Riddle</span>
                    The developer wants to tell you something in the console.
                </h4>
            </div>
            {hint ?
                <p>
                    <code>Right click the page -> inspect -> click the console tab </code>
                </p>
                : ''}
            <hr/>
            <SubmitAnswerTemplate cb={cb} solution={solution}/>
        </>
    );
}

export default ConsoleLog;