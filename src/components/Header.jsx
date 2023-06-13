import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {
  return (
    <header className="px-4 py-5 bg-secondaryInfo shadow items-center">
        <div className="md:flex md:justify-between items-center">
            <h2 className="text-4xl text-primary font-bold text-center md:mb-0">
                GeoFlow
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-4">
                <button type="button" className="text-grayText">
                    Search project
                </button>

                <Link to="/projects" className="text-grayText">
                Projects
                </Link>

                <button type="button" className='text-white text-xs bg-primary-light p-2 rounded-xl hover:cursor-pointer hover:bg-primary-hover hover:border hover:text-white'>
                   Sign Out
                </button>

                <div className="text-grayText">Search</div>
            </div>
        </div>

    </header>
  )
}

export default Header