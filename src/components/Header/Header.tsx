import { useThemeSetup } from "../../hooks/useThemeSetup"
import { IoMoon, IoSunny } from "react-icons/io5";
import "./styles.css"

export const Header = () => {
  const { savedTheme, toggleTheme } = useThemeSetup()

  return (
    <header className="header">
      <div className="header-content content">
        <h1 className="main-title">Where in the world?</h1>
        <div className="toggle-theme-btn" onClick={toggleTheme}>
          {savedTheme === "dark" ? (
            <><IoSunny style={{height: "1.5em", width: "1.5em"}} /><span className="toggle-text">Light Mode</span></>
          ) : (
            <><IoMoon height={20} width={20} /><span className="toggle-text">Dark Mode</span></>
          )}
        </div>
      </div>
    </header>
  )
}
