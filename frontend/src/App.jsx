import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      <Toaster position='bottom-center'/>
    </>
  )
}

export default App
