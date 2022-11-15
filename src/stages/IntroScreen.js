function IntroScreen({cb, hint}) {
    const fn = () => {
        cb()
    }

    return (
        <section className={'text-center'}>
            <h3>Welcome to the Frontend Game</h3>
            <p className="mb-0 fw-bold text-success">Rules:</p>
            <ul className="list-group list-unstyled">
                <li>The game consists of multiple stages</li>
                <li>Each stage contains a riddle</li>
                <li>
                    Write the found answer in the input and click{' '}
                    <kbd>Answer</kbd>
                </li>
            </ul>
            <hr />
            <p className="mb-0 fw-bold text-success">Requirements to play:</p>
            <ul className="list-group list-unstyled">
                <li>Frontend development knowledge</li>
                <li>Desktop browser</li>
                <li>HTML, CSS, JS, Developer tools etc.</li>
            </ul>
            <hr />
            <p>
                <code>
                    Each page will contain a hint button, click it whenever
                    you're stuck!
                </code>
            </p>
            {hint ? (
                <div className="d-flex justify-content-center">
                    <button className={'btn btn-success btn-lg '} onClick={fn}>
                        Let's start!
                    </button>
                </div>
            ) : (
                ''
            )}
        </section>
    )
}

export default IntroScreen
