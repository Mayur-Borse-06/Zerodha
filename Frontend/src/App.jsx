import './App.css'
import HomePage from './landing_page/home/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './landing_page/signup/Signup'
import About from './landing_page/about/About'
import Products from './landing_page/products/Products'
import Pricing from './landing_page/pricing/Pricing'
import Support from './landing_page/support/Support'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/pricing' element={<Pricing />}></Route>
        <Route path='/support' element={<Support />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
