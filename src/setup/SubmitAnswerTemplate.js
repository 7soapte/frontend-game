import {useState} from 'react';

import './SubmitAnswerTemplate.scss'

function SubmitAnswerTemplate({cb, solution}) {
    const [answer, setAnswer] = useState('');
    const [hasError, setHasError] = useState(false);

    function checkAnswer() {
        if (solution === answer) {
            setHasError(false);
            cb();
            return;
        }

        setHasError(true);
    }

    return (
        <>
            <div className="row">
                <div className="col-12 col-md-6 offset-md-3">
                    <div className="input-group animate-content mx-auto">
                        <input type="text"
                               className={'form-control' + (hasError ? ' danger' : '')}
                               placeholder="Write your answer here..."
                               aria-label="Write in your answer to the riddle"
                               aria-describedby="answer-btn"
                               value={answer}
                               onKeyDown={(e)=> e.key === "Enter" && checkAnswer() }
                               onChange={(e) => {
                                   setAnswer(e.target.value)
                                   setHasError(false)
                               }}
                        />
                        <button className={'btn btn-success' + (hasError ? ' btn-danger shadow-sm' : ' border-light')}
                                type="button"
                                id="answer-btn"
                                onClick={() => checkAnswer()}>
                            Submit answer
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default SubmitAnswerTemplate;