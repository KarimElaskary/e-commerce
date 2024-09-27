import { HomePage } from './Pages/Home/HomePage'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBarLogin from './Components/Utiltes/NaveBarLogIn'
import Footer from './Components/Utiltes/Footer'
import AllCategoryPage from './Pages/Category/AllCategoryPage'
import AllBrandPage from './Pages/Brand/AllBrandPage'

function App() {
  return (
    <div>
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/allcategory' element={<AllCategoryPage />} />
          <Route path='/allbrand' element={<AllBrandPage />} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
