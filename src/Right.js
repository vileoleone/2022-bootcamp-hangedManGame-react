


export default function Right() {

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

    let arrayForTemplate = []
    function randomNumber() {
        let number = Math.floor(Math.random() * 11)

        const arrayForTemplate = wordArray[number].toUpperCase().split("");
        console.log(arrayForTemplate)
        return arrayForTemplate;
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
                {arrayForTemplate.map((w) => {
                    return (
                        <GameWordTemplate word={w} />
                    )
                })}
            </span>
        </section>
    )
}