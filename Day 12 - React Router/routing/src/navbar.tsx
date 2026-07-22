import { Link } from "react-router";



export default function Navbar() {

    return (
        <nav className="flex flex-row justify-center  text-sm gap-2 rounded border-2 border-slate-900">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/dashboard">dashboard</Link>
        </nav>
    )
}