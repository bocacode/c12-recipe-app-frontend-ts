import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
	return (
		<BrowserRouter>
    {/* <Header/>  */}
			<Routes>
        <Route path='/' element={<h2>This is home</h2>} /> 
      </Routes>
      {/* <Footer />  */}
		</BrowserRouter>
	)
}

export default App
