//BroserRouter, se encarga de armar la estructura de enrutamiento
//Routes, es el encargado de envolver todas las rutas individuales
//Route, es el que me va a dar la posibilidad de crear rutas
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/pages/home/Home";
import Formulario from "./components/pages/fomulario/Formulario";
import Login from "./components/pages/login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>

      <Routes>

        <Route path="/" element={<Formulario/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;
