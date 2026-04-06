import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./layout/Layout"

import Homepage from "./pages/Homepage"
import WebDeveloper from "./pages/WebDeveloper"
import Fotografia from "./pages/Fotografia"
import VideoDrone from "./pages/VideoDrone"
import Stampa3D from "./pages/Stampa3D"
import PageNotFound from "./pages/PageNotFound"

import "./index.css"
import "./styles/homepage.css"
import "./styles/webDeveloper.css"
import "./styles/fotografia.css"
import "./styles/videoDrone.css"
import "./styles/stampa3d.css"
import "./styles/pageNotFound.css"
import "./styles/navBar.css"
import "./styles/footer.css"
import "./styles/hoverStyles.css"

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="web-developer" element={<WebDeveloper />} />
          <Route path="fotografia" element={<Fotografia />} />
          <Route path="video-droni" element={<VideoDrone />} />
          <Route path="stampa3D" element={<Stampa3D />} />
          <Route path="*" element= {<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
