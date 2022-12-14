import NeonCube from '../setup/NeonCube'

function EndingScreen({hintsClicked}) {
    return (
        <>
            <h4 className={'mb-5'}>
                Thank you for playing the game and good job getting to the
                finish!
            </h4>
            <NeonCube  hintsClicked={hintsClicked} showControls={true}/>
            <p className={''}>
                For suggestions and feedback feel free to contact me at
                <br />
                <kbd>📧andrei.dumitrache@hotmail.com</kbd>
                <br />
                or fork some changes on this game's repo{' '}
                <a
                    href="https://github.com/7soapte/frontend-game"
                    target={'_blank'}
                    rel="noreferrer"
                >
                    The Frontend Game
                </a>
            </p>
            <p>
                More of my work can be found here:{' '}
                <a
                    href="https://codepen.io/DumitracheAndrei/"
                    target={'_blank'}
                    rel="noreferrer"
                >
                    Codepen
                </a>
            </p>
          <a href="/frontend-game/" rel="noreferrer" className="btn btn-sm btn-success">Replay game.</a>
        </>
    )
}

export default EndingScreen
