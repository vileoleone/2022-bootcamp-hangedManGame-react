import React from "react";

export default function Board() {

    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const [clickedArray, clickSet] = React.useState([])

    function onClickLetter(index) {
        console.log(index)
        if(!clickedArray.includes(index)) {
            clickSet([...clickedArray, index])
        }   
        console.log(clickedArray);
    }

    function Letters(props) {

        return (
            <div className={props.className} onClick={props.function}>
                {props.letter}
            </div >
        )
    }



    return (
        <div className="board">
            {letters.map((letter, index) => {

                return (
                    <Letters
                        key={index}
                        letter={letter}
                        className={(clickedArray.includes(index)) ? "clicked-letter" : "each-letter" }
                        function = {() => onClickLetter(index)}
                    />
                )
            })}
        </div>
    )
}