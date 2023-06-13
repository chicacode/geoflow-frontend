import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Sidebar = () => {
  const { auth } = useAuth();
  return (
    <aside className="md:w-1/3 lg:w-1/5 xl:w-1/6 px-5 py-10">
      <p className="text-secondary text-xl font-Poppins">Hello: {auth.name}</p>
      <Link
        to="create-project"
        className="text-secondary bg-secondary-hover w-full p-2 font-Poppins block mt-5 text-center rounded-lg hover:cursor-pointer hover:bg-secondary-light"
      >
        New Project
      </Link>
    </aside>
  );
};

export default Sidebar;
