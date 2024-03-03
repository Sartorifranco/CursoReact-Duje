import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/pages/home/Home'
import Character from './components/pages/characters/Character'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/characters' element={<Character/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App;
