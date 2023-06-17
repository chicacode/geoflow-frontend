import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  return (
    <header className="px-4 py-5 bg-secondaryInfo shadow items-center">
      <div className="md:flex md:justify-between items-center">
        <div className="flex justify-center items-center gap-1">
          <img
            src="../../public/assets/geo-flow-logo-2.png"
            alt="geoflow-logo"
            height={50}
            width={50}
          />
          <span className="hidden md:flex text-4xl text-white font-bold text-center md:mb-0">
            GeoFlow
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <button type="button" className="text-grayText">
            Search project
          </button>

          <Link to="/projects" className="text-grayText">
            Projects
          </Link>

          <button
            type="button"
            className="text-white text-xs bg-primary-light p-2 rounded-xl hover:cursor-pointer hover:bg-primary-hover hover:border hover:text-white"
          >
            Sign Out
          </button>

          <div className="text-grayText">Search</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
