function IntroScreen({cb, hint}) {
    const fn = () => {
        cb();
    }

    return (
        <section className={'text-start'}>
            <h3>Welcome to the Frontend Game</h3>
            <p className="mb-0 fw-bold">Rules:</p>
            <ul>
                <li>The game consists of multiple stages</li>
                <li>Each stage contains a riddle</li>
                <li>Write the found answer in the input and click <kbd>Answer</kbd></li>
            </ul>
            <hr/>
            <p className="mb-0 fw-bold">Requirements to play:</p>
            <ul>
                <li>Frontend development
                    knowledge
                </li>
                <li>HTML, CSS, JS, Developer tools etc</li>
            </ul>
            <hr/>
            <p><code>Each page will contain a hint button, click it whenever you're stuck!</code></p>
            {hint ?
                <div className="d-flex justify-content-center">
                    <button className={'btn btn-primary btn-lg '} onClick={fn}>Let's start!</button>
                </div> : ''
            }
        </section>
    );
}

export default IntroScreen;
