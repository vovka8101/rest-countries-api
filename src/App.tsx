import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useAppSelector } from './app/hooks'
import { Countries } from './components/Countries/Countries'
import { Header } from './components/Header/Header'
import { CountryDetails } from './components/CountryDetails/CountryDetails'

function App() {
  const { value } = useAppSelector(state => state.theme)

  return (
    <div className="app" data-theme={value}>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:code" element={<CountryDetails />} />
          <Route path="/*" element={<div>404 Not Found</div>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
