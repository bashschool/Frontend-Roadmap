

interface ButtonProps {
    name: string;
    className?: string
}

export function Button(props: ButtonProps) {

    function handleClick() {
        console.log(`hello ${props.name}`)
    }


    return (
        <>
            <button
                className={props.className}
                onClick={handleClick}

            >
                {props.name}
            </button>
        </>
    )
}