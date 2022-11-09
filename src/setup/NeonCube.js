import './NeonCube.scss';
// import {useState} from 'react';

function NeonCube({hintsClicked}) {
    // const [inputEf, setInputEf] = useState(true);

    // const cubFace = {
    //     "front": [0,0],
    //     "back": [0,0], //not used
    //     "left": [0,90],
    //     "right": [0,-90],
    //     "top": [-90,0],
    //     "bottom": [90,0],
    // }

    return (
        <div className={'d-flex justify-content-center align-items-center mt-5'}>
            {/*<input type="button" value={'click me'} onClick={() => setInputEf(!inputEf)}/>*/}
            <div className="scene">
                {/*<div className={'box' + (inputEf ? ' __expand' : '')}>*/}
                    <div className={'box'}>
                        <div className="face front">Good job!</div>
                        <div className="face back">Congrats</div>
                        <div className="face left">Hints clicked: {hintsClicked}</div>
                        <div className="face right">Amazing</div>
                        <div className="face top">Impressive</div>
                        <div className="face bottom">Big brain</div>
                    </div>
                {/*</div>*/}
            </div>
        </div>
    );
}

export default NeonCube;