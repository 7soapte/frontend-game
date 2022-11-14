import './NeonCube.scss'
import {useState} from 'react'

function NeonCube({hintsClicked, showControls}) {
    const [inputEf, setInputEf] = useState(true)

    return (
        <div
            className={'d-flex flex-column justify-content-center align-items-center mt-5'}
        >
            {showControls ? (
                <input
                  className="btn btn-sm btn-success mb-3"
                    type="button"
                    value={'Expand cube'}
                    onClick={() => setInputEf(!inputEf)}
                />
            ) : null}

            <div className="scene mb-3">
                <div
                    className={
                        'box' + (showControls && inputEf ? ' __expand' : '')
                    }
                >
                    <div className="face front">Good job!</div>
                    <div className="face back">Congrats</div>
                    <div className="face left">
                        Hints clicked: {hintsClicked}
                    </div>
                    <div className="face right">Amazing</div>
                    <div className="face top">Impressive</div>
                    <div className="face bottom">Big brain!</div>
                </div>
            </div>
        </div>
    )
}

export default NeonCube
