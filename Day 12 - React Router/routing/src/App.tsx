import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import ProjectPage from "./pages/projects"
import DashboardPage from "./pages/dashboard"
import Layout from "./layout"
import ProductPage from "./pages/product"
import ProductsPage from "./pages/products"



function App() {

  return (

    // /product/abhishek
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Route>

        <Route path="*" element={<span>not found</span>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
