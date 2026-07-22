import { Link } from "react-router"


const products = [
    {
        id: "1",
        name: "tshrit",
        price: 299
    },
    {
        id: "2",
        name: "tshrit",
        price: 199
    },
    {
        id: "3",
        name: "tshrit",
        price: 399
    },
    {
        id: "4",
        name: "tshrit",
        price: 599
    },
    {
        id: "5",
        name: "tshrit",
        price: 900
    },
]


export default function ProductsPage() {

    return (
        <>
            <h1>ALL PRODUCTS</h1>

            {products.map((product) => {
                return (
                    <Link
                        to={`/product/${product.id}`}
                        className="flex flex-col p-2 rounded-2xl bg-green-200">
                        <h2>{product.name}</h2>
                        <span>Rs.{product.price}</span>
                    </Link>
                )
            })}
        </>
    )
}