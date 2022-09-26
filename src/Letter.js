export default function Letter(props) {

    return (
        <button className={props.className}  onClick={props.function} disabled = {props.disabled}>
            {props.letter}
        </button>
    )
}

