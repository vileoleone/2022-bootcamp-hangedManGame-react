import Wordbox from "./Wordbox"

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
    
    function randomNumber() {
        let number = Math.floor(Math.random()*11)
        let word = wordArray[number];
        console.log(number)
        console.log(word);
        return word;
    }
    
    
    return (
        <section className="right-column" >
            <button className="choose-button" onClick={randomNumber}>Escolha a palavra</button>
            <Wordbox/>
        </section>
    )
}