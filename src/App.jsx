import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import About from "./pages/About"
import ContactMe from "./pages/ContactMe"
import Home from "./pages/Home"
import Projects from "./pages/Project"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactMe />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
