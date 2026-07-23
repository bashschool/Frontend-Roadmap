import { NavLink } from "react-router";


export default function Navbar() {

    return (
        <nav className="flex flex-row gap-3 justify-center items-center text-blue-700">
            <NavLink to={"/"} >Home</NavLink>
            <NavLink to={"/login"} >Login</NavLink>
            <NavLink to={"/add-product"} >Add Product</NavLink>
        </nav>
    )
}