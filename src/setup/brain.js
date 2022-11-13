import words from '../assets/common-english-words.json'

function GameSolutions(stageLength) {
    const stages = stageLength
    const solutions = []

    // deconstruct commonWords array from json
    let {commonWords} = words

    // keep only words with 6 letters or above
    commonWords = commonWords.filter((x) => x.length > 6)

    for (let i = 0; i < stages; i++) {
        solutions.push(
            commonWords[Math.floor(Math.random() * commonWords.length)]
        )
    }

    return solutions
}

export default GameSolutions
