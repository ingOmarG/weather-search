import { NavLink } from "react-router-dom";
import logoApp from '../../assets/img/logo-app.png'

export const Header = () => {
  return (
    <header className="h-20 shadow-md">
      <div className="container mx-auto flex h-full justify-between items-center max-w-7xl px-8">
        <NavLink exact to="/">
          <img src={logoApp} alt="Logo App" className="mx-auto w-48 md:w-72" />
        </NavLink>

        <NavLink
          exact
          activeClassName="border-b-4 border-green-300"
          to="/historial"
        >
          <h2 className="font-bold text-xl">Historial</h2>
        </NavLink>
      </div>
    </header>
  );
};
