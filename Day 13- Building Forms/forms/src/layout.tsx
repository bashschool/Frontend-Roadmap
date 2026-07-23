import { Outlet } from "react-router";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";

export default function RootLayout() {


    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="px-10 border-t-2 pt-10 bg-green-100 h-full">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}