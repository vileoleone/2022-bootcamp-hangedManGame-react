export default function Letter(props) {

    return (
        <button data-identifier="letter" className={props.className}  onClick={props.function} disabled = {props.disabled}>
            {props.letter}
        </button>
    )
}

