import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'


function App() {
	return (
		<BrowserRouter>
    {/* <Header/>  */}
			<Routes>
        <Route path='/' element={<button className='btn btn-primary'>This is home</button>} /> 
      </Routes>
	  <Home />
      {/* <Footer />  */}
		</BrowserRouter>
	)
}

export default App
