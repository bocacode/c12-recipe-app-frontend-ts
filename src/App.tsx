import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'


import Footer from './components/Footer'

import Header from './components/Header'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AllRecipes from './pages/AllRecipes'
import RecipeSubmit from './pages/RecipeSubmit'





function App() {
	return (
		<BrowserRouter>
    <Header /> 
			<Routes>
        <Route path='/' element={<button className='btn btn-primary'>This is home</button>} /> 
      </Routes>
	  <Home />
				<Route path='/login' element={<Login />} />  
				<Route path='/signup' element={<Signup />} />    
				<Route path='/recipes' element={<AllRecipes />} />    
				<Route path='/submit' element={<RecipeSubmit />} />    
				</Routes>
     <Footer /> 
		</BrowserRouter>
	)
}

export default App
