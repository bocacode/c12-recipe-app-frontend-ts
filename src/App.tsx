import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
	return (
		<BrowserRouter>
    {/* <Header/>  */}
			<Routes>
        <Route path='/' element={<button className='btn btn-primary'>This is home</button>} /> 
      </Routes>
      {/* <Footer />  */}
		</BrowserRouter>
	)
}

export default App
