import { CartIcon, FavoriteIcon, SearchIcon, UserIcon } from ".";
import LogoDominguez from "../assets/images/logo_dominguez.png";
import "../assets/styles/main.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img
            src={LogoDominguez}
            loading="lazy"
            alt="Logo Importaciones Dominguez"
          />
        </div>

        <SearchBar />

        <div className="header__icon">
          <div className="header__icon-container">
            <UserIcon />
          </div>
          <div className="header__icon-container">
            <FavoriteIcon />
            <div className="badge">5</div>
          </div>
          <div className="header__icon-container">
            <CartIcon />
            <div className="badge">5</div>
          </div>
        </div>
      </div>
    </header>
  );
};

const SearchBar = () => {
  return (
    <>
      <form className="searchbar-form">
        <input type="text" placeholder="Buscar producto..." />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
};
