import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRoutes from './components/AppRoutes'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <div className="app">
        <h1>React-Rails App</h1>
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
