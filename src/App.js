
import Letter from "./Letter";
import GameWordTemplate from "./GameWordTemplate"
import Left from "./Left"
import React from "react";
import Userboard from "./Userboard"


import image0 from "./assets/forca0.png";
import image1 from "./assets/forca1.png";
import image2 from "./assets/forca2.png";
import image3 from "./assets/forca3.png";
import image4 from "./assets/forca4.png";
import image5 from "./assets/forca5.png";
import image6 from "./assets/forca6.png";

export default function App() {

    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    const imageArray = [

        image0,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6

    ]

    const wordArray = [

        'nordestino',
        'marajoara',
        'guzera',
        'mangalarga',
        'caracu',
        'pantaneiro',
        'campolina',
        'nelore',
        'penthorse',
        'aberdeen',
        'holandês'

    ]

    const [numberofErrors, setError] = React.useState(0);
    const [currentImage, imageSet] = React.useState(imageArray[0]);
    const [clickedLetterArray, clickSet] = React.useState([])
    const [wordForDisplay, wordForDisplaySet] = React.useState([])

    function randomNumber() {

        if (wordForDisplay.length === 0) {
            let number = Math.floor(Math.random() * 11)
            wordForDisplaySet(wordArray[number].toUpperCase().split(""));
        }
    }


    function changeImage(error) {
        setError(numberofErrors + 1);
        imageSet(imageArray[numberofErrors]);
    }

    function onClickLetter(letter) {
        console.log(letter)
        if (!clickedLetterArray.includes(letter)) {
            clickSet([...clickedLetterArray, letter])
        }
    }


    return (
        <div className="body">
            <main className="main">
                <Left currentImage={currentImage} />
                <section className="right-column" >
                    <button className="choose-button" onClick={randomNumber}>Escolha a palavra</button>
                    <span className="gameWord-container">
                        {wordForDisplay.map((w, index) => {
                            return (
                                <GameWordTemplate
                                    word={w}
                                    key={index}
                                    class={clickedLetterArray.includes(w) ? "clicked-letter": "hidden-word" }   
                                />
                            )
                        })}
                    </span>
                </section>
            </main>
            <div className="user-board">
                <div className="board">
                    {letters.map((letter, index) => {
                        return (
                            <Letter
                                key={index}
                                letter={letter}
                                className="each-letter"
                                function={() => { onClickLetter(letter) }}
                            />
                        )
                    })}
                </div>
                <Userboard />
            </div>

        </div>
    );
}