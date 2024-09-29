import { HomePage } from './Pages/Home/HomePage'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBarLogin from './Components/Utiltes/NaveBarLogIn'
import Footer from './Components/Utiltes/Footer'
import AllCategoryPage from './Pages/Category/AllCategoryPage'
import AllBrandPage from './Pages/Brand/AllBrandPage'
import ShopProductsPage from './Pages/Products/ShopProductsPage'
import ProductDetalisPage from './Pages/Products/ProductDetalisPage'
import CartPage from './Pages/Cart/CartPage'
import ChooseMethodPage from './Pages/Checkout/ChooseMethodPage'
import AdminAllProductsPage from './Pages/Admin/AdminAllProductsPage'
import AdminAllOrdersPage from './Pages/Admin/AdminAllOrdersPage'
import AdminAddBrandPage from './Pages/Admin/AdminAddBrandPage'
import AdminAddCategoryPage from './Pages/Admin/AdminAddCategoryPage'
import AdminAddSubCategoryPage from './Pages/Admin/AdminAddSubCategoryPage'
import AdminAddProductsPage from './Pages/Admin/AdminAddProductsPage'

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
          <Route path='/product' element={<ShopProductsPage />} />
          <Route path='/products/:id' element={<ProductDetalisPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/order/paymethod' element={<ChooseMethodPage />} />
          <Route path='/admin/allproducts' element={<AdminAllProductsPage />} />
          <Route path='/admin/allorders' element={<AdminAllOrdersPage />} />
          <Route path='/admin/addbrand' element={<AdminAddBrandPage />} />
          <Route path='/admin/addcategory' element={<AdminAddCategoryPage />} />
          <Route path='/admin/addsubcategory' element={<AdminAddSubCategoryPage />} />
          <Route path='/admin/addproduct' element={<AdminAddProductsPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
