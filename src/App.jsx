import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import DataChecker from './pages/DataChecker'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Results from './pages/Results'

function App() {
  return (
    <>

      <Router>
      <Header></Header>
        <Routes>
          <Route
              exact
              path="/"
              element={<Home />}
          />
          <Route
              exact
              path="/checker"
              element={<DataChecker />}
          />
          <Route
              exact
              path="/results"
              element={<Results />}
          />
          <Route
              path="*"
              element={<Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
