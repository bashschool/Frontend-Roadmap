import { Outlet } from "react-router";
import Navbar from "./navbar";

export default function Layout() {


    return (
        <div className="flex flex-col gap-2 min-h-screen h-full">
            <Navbar />

            <Outlet />

            <footer className="mt-auto">
                this is a footer
            </footer>
        </div>
    )
}