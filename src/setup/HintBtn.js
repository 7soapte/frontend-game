function HintBtn({setHint, setHintsClicked, hintsClicked, hint}) {

    return (
        <div className={hint ? "" : "animate-content"}>
            <button className={'btn btn-success btn-sm animate-hint mt-3' + (hint ? ' clicked-hint' : '')}
                    onClick={() => {
                        setHint(true);
                        setHintsClicked(hintsClicked + 1);
                    }}>HINT
            </button>
        </div>
    );
}

export default HintBtn;