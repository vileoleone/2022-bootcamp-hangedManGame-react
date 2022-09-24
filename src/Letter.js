export default function Letter(props) {

    return (
        <div className={props.className}  onClick={props.function}>
            {props.letter}
        </div >
    )
}

