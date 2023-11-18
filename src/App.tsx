import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import ViewPdf from './views/About/CV/ViewPdf'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/pdf" element={<ViewPdf />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
