import { useEffect } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router"

export default function ProductPage() {

    const navigate = useNavigate()
    const [params, setParams] = useSearchParams()

    const { id } = useParams<{
        id: string
    }>()

    const size = params.get("size")

    // useEffect(() => {
    //     if (!size) {
    //         console.log(size)
    //         navigate("/product/1")
    //     }
    // }, [])

    let message;

    if (size === null) {
        message = "Please provide a size"
    }


    return (
        <>
            hello tshirt {id} - {size}

            <br />

            {
                !size && <span className="text-red-400">{message}</span>
            }
        </>
    )
}