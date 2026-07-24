import { NavLink } from "react-router";
import { useAppSelector } from "../../store/hook";


export default function Navbar() {

    const count = useAppSelector((state) => state.counter.value)

    return (
        <nav className="flex flex-row gap-3 justify-center items-center text-blue-700">
            <NavLink to={"/"} >Home</NavLink>
            <NavLink to={"/login"} >Login</NavLink>
            <NavLink to={"/add-product"} >Add Product</NavLink>
            <NavLink to={"/counter"} >Counter</NavLink>
            <span>{count}</span>
        </nav>
    )
}