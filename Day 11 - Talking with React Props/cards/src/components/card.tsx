import { useEffect, useState } from "react";

interface CardProps {
    title: string;
    bgcolor?: string;
    handleButton: () => void;
}


export default function Card({ title, handleButton, bgcolor = "bg-slate-900" }: CardProps) {

    const [count, setCount] = useState(0)

    useEffect(() => {

        console.log("running inside useeffect")

    }, [count])



    return (
        <div className={`h-[500px] w-[500px] ${bgcolor} text-white rounded flex justify-center items-center flex-col gap-10`}>
            <span className="text-4xl">{title}</span>
            <button
                className="bg-black rounded px-2 py-2"

                onClick={() => {
                    setCount((count) => count + 1)
                    handleButton()
                }}

            >
                Click me! {count}
            </button>
        </div>
    )
}