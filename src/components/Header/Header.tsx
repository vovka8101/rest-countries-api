import { useThemeSetup } from "../../hooks/useThemeSetup"

export const Header = () => {
  const toggleTheme = useThemeSetup()

  return (
    <header className="header">
      <h1 className="main-title">Where in the world?</h1>
      <div onClick={toggleTheme}>Toggle Theme Element</div>
    </header>
  )
}
