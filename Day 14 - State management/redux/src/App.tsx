import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import RootLayout from './layout'
import HomePage from './pages/home'
import NotFound from './pages/not-found'
import LoginPage from './pages/login'
import AddProductPage from './pages/add-product'
import CounterPage from './pages/counter'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='counter' element={<CounterPage />} />
          <Route path='/add-product' element={<AddProductPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
