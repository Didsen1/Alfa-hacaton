import { Link, Outlet, useLocation } from "react-router-dom"
import logo from "shared/icons/logo.svg"
import style from "./App.module.scss"

const App = () => {
  const { pathname } = useLocation()
  console.log(pathname === "/")

  return (
    <div className={style.App}>
      <header className={style.Appheader}>
        <img src={logo} className={style.Applogo} alt="logo" />
        <p>header</p>
      </header>
      {pathname === "/" && (
        <>
          <Link to="/counter">Counter</Link>
          <Link to="/quotes">Quotes</Link>
        </>
      )}
      <Outlet />
      <footer>
        <p>footer</p>
        <img src={logo} className={style.Applogo} alt="logo" />
      </footer>
    </div>
  )
}

export default App
