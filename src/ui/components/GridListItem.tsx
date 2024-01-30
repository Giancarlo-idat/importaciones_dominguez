import { Link } from "react-router-dom";
import "../assets/styles/main.scss";
import { CartIcon, FavoriteIcon } from ".";

interface GristListItemProps {
  title: string;
  images: string[];
}

export const GridListItem = (props: GristListItemProps) => {
  return (
    <section className="grid-container">
      <div className="grid-title">
        <h3>{props.title}</h3>
        <Link to="/"> View all</Link>
      </div>

      <div className="grid-content">
        {props?.images?.map((image, key) => (
          <Link to="/" className="grid-item" key={key}>
            <div className="grid-item__content">
              {/* shopping cart icon and favorites icon */}
              <div className="icons">
                <CartIcon />
                <FavoriteIcon />
              </div>
              <img
                key={key}
                src={`../../../src/ui/assets/images/motherboard/${image}`}
                alt={props.title}
                loading="lazy"
              />
              <h5>
                PLACA MADRE ASROCK H610M/AC, PARA PROCESADORES INTEL LGA 1700,
                CON WIFI, 2 RANURAS DE MEMORIA DDDR4 HASTA 64GB BUSS 2133 MHZ,
                13 VA GEN.(H610M/AC WIFI)
              </h5>
              <strong>STOCK: {10}</strong>

              <div className="price">
                <strong>${1000} - S/379.17 </strong>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
