import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import ViewPdf from './views/About/CV/ViewPdf'
import  {useEffect} from 'react'

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)}, 500)
    return () => clearTimeout(timer)
  }, [])

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
