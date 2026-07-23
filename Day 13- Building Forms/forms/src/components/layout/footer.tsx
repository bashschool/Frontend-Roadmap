import { NavLink } from "react-router";


export default function Footer() {
    return (
        <footer className="flex flex-col gap-4 justify-center items-center bg-slate-800 py-10 min-h-[150px] mt-auto h-full text-white">
            <div className="flex flex-row gap-4">
                <NavLink to={"/"} >Home</NavLink>
                <NavLink to={"/login"} >Login</NavLink>
                <NavLink to={"/add-product"} >Add Product</NavLink>
            </div>
        </footer>
    )
}