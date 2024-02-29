import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useAppSelector } from './app/hooks'
import { Countries } from './components/Countries/Countries'
import { Header } from './components/Header/Header'
import { CountryDetails } from './components/CountryDetails/CountryDetails'
import { CountryNotFound } from './components/404/CountryNotFound'

function App() {
  const { value } = useAppSelector(state => state.theme)

  return (
    <div className="app" data-theme={value}>
      <Header />
      <main className="main">
        <Routes>
          <Route index element={<Countries />} />
          <Route path="country/:code" element={<CountryDetails />} />
          <Route path="*" element={<CountryNotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
