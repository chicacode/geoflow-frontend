import { Link } from "react-router-dom";
const RecoverPassword = () => {
  return (
    <div>
      <h1 className="text-primary text-3xl capitalize font-bold">
        Recover your Access
      </h1>
      <span className="text-secondary font-Poppins">
        Don&apos;t lose your projects
      </span>

      <form className="my-10 bg-white shadow rounded-xl p-10 font-Poppins">
        <div className="my-5">
          <label
            className="flex justify-start text-secondary-light  text-lg font-medium"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray focus:border-primary focus:outline-none"
          />
        </div>

        <input
          type="submit"
          value="Recover Password"
          className="bg-secondary my-5 w-full py-3 text-white uppercase font-bold rounded-lg hover:cursor-pointer hover:bg-primary hover:text-secondary transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-primary uppercase text-sm hover:text-secondary"
          to="/"
        >
          Already have an Account? Login
        </Link>

        <Link
          className="block text-center my-5 text-primary uppercase text-sm hover:text-secondary"
          to="/register"
        >
          No account? Register
        </Link>
      </nav>
    </div>
  );
};

export default RecoverPassword;
