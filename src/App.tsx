import './App.css'
import { useAppSelector } from './app/hooks'
import { Countries } from './components/Countries/Countries'
import { Header } from './components/Header/Header'

function App() {
  const { value } = useAppSelector(state => state.theme)

  return (
    <div className="app" data-theme={value}>
      <Header />
      <Countries />
    </div>
  )
}

export default App
