

export default function Button(props) {

    return(
        <>
        <button className="button" onClick={props.handler}>
            {props.label}
        </button>
        </>
    );
}

