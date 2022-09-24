import React from "react";

export default function Right() {
    const [wordForDisplay, wordForDisplaySet] = React.useState([])
    let arrayForTemplate=[]

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
    function randomNumber() {
        let number = Math.floor(Math.random() * 11)
        //arrayForTemplate = ;

        wordForDisplaySet(wordArray[number].toUpperCase().split(""));
        console.log(wordForDisplay)
    }

    function GameWordTemplate(props) {

        return (
            <div className="hidden-word">
                {props.word}
            </div>
        )
    }

    return (
        <section className="right-column" >
            <button className="choose-button" onClick={randomNumber}>Escolha a palavra</button>
            <span className="gameWord-container">
                {wordForDisplay.map((w, index) => {
                    return (
                        <GameWordTemplate word={w} key={index} />
                    )
                })}
            </span>
        </section>
    )
}