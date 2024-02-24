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
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </div>
  )
}

export default App
