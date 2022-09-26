
import Letter from "./Letter";
import GameWordTemplate from "./GameWordTemplate"
import Left from "./Left"
import React, { useState } from "react";
import palavras from "./palavras"

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

    const wordArray = palavras()

    const [numberofErrors, setError] = React.useState(1);
    const [currentImage, imageSet] = React.useState(imageArray[0]);
    const [clickedLetterArray, clickSet] = React.useState([])
    const [boardClickedArray, boardClickedSet] = React.useState([])
    const [wordForDisplay, wordForDisplaySet] = React.useState([])
    const [checkForWin, checkWinSet] = React.useState(false)
    const [countForWin, countForWinSet] = React.useState(1);
    let wordsToWin = countWords(wordForDisplay);

    function randomNumber() {

        if (wordForDisplay.length === 0) {
            let number = Math.floor(Math.random() * 11)
            wordForDisplaySet(wordArray[number].toUpperCase().split(""));

        }
    }

    function countWords(list) {
        let arr = [];
        list.forEach((item) => {
            if (!arr.includes(item)) {
                arr.push(item);
            }
        })
        return arr.length
    }

    function changeError(error) {
        setError(numberofErrors + 1);
    }

    function changeImage() {
        imageSet(imageArray[numberofErrors]);
    }

    function onClickLetter(letter) {
        console.log(wordForDisplay)

        boardClickedSet([...boardClickedArray, letter]);

        if (wordForDisplay.includes(letter)) {
            clickSet([...clickedLetterArray, letter])
            countForWinSet(countForWin + 1)

            if (countForWin === wordsToWin) {
                checkWinSet(true)
            }

        } else {
            changeError();
            changeImage();
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
                                    class={

                                        checkForWin === true ? "game-win" :
                                            clickedLetterArray.includes(w) ?
                                                (numberofErrors === 7 ? "game-over" : "clicked-letter") : (numberofErrors === 7 ? "game-over" : "hidden-word")}
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
                                className={

                                    (numberofErrors === 7 || checkForWin === true || wordForDisplay.length === 0) ? "each-letter-clicked" :
                                        (boardClickedArray.includes(letter) ? "each-letter-clicked" : "each-letter")
                                }
                                function={() => { onClickLetter(letter) }}
                                disabled={

                                    (numberofErrors === 7 || checkForWin === true) ? true :
                                        (boardClickedArray.includes(letter) ? true : false)
                                }
                            />
                        )
                    })}
                </div>
                <span className="below-board">
                    <p> Já sei a palavra!</p>
                    <input className="input" type="text" placeholder="Digite a palavra"></input>
                    <button className="try-button">Chutar</button>
                </span>
            </div>

        </div>
    );
}