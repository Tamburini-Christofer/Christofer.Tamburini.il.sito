
//import Dipendenze
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import

//import Pagine
import Blender from "./pages/Blender"
import Homepage from "./pages/Homepage"
import Photography from "./pages/Photography"
import Print3D from "./pages/Print3D"
import WebDeveloper from "./pages/WebDeveloper"
import PageNotFound from "./context/PageNotFound"
//import

//import Stili pagina
import "./styles/Blender.css"
import "./styles/Homepage.css"
import "./styles/Layout.css"
import "./styles/NavBar.css"
import "./styles/Photography.css"
import "./styles/Print3D.css"
import "./styles/WebDeveloper.css"
//import

function App() {

  return (
    <>
       <BrowserRouter>
          <Routes>
              <Route index element={<Homepage />} />
              <Route path="webDeveloper" element={<WebDeveloper />} />
              <Route path="photography" element={<Photography />} />
              <Route path="blender" element={<Blender />} />
              <Route path="stampa3D" element={<Print3D />} />
              <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
