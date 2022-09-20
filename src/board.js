import Userboard from "./Userboard"
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function Letters(props) {

    function testLetter() {
        console.log(props.letter);
    }

    return (
        <div className="each-letter" onClick={testLetter}>
            {props.letter}
        </div>
    )
}


export default function Board() {
    return (
        <div className="user-board">
            <div className="board">
                {letters.map((letter) => {

                    return (
                        <Letters letter={letter} />
                    )

                })}
            </div>
            <Userboard />
        </div>
    )
}