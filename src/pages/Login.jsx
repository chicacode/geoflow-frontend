
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <h1 className="text-primary text-3xl capitalize font-bold">Sign In</h1>
      <span className="text-secondary font-Poppins">Manage your projects</span>

      <form className="my-10 bg-white shadow rounded-xl p-10 font-Poppins">
        <div className="my-5">
          <label
            className="flex justify-start text-secondary-light text-lg font-medium"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray focus:border-primary focus:outline-none"
          />
        </div>

        <div className="my-5">
          <label
            className="flex justify-start text-secondary-light text-lg font-medium"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password Register"
            className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray focus:border-primary focus:outline-none"
          />
        </div>

        <input
            type="submit"
            value="Sign In"
            className="bg-secondary my-5 w-full py-3 text-white uppercase font-bold rounded-lg hover:cursor-pointer hover:bg-primary hover:text-secondary transition-colors"
          />
      </form>

      <nav className="lg:flex lg:justify-between">
            <Link 
                className='block text-center my-5 text-primary uppercase text-sm hover:text-secondary'
                to="/register"
            >No account? Register</Link>

            <Link 
                className='block text-center my-5 text-primary uppercase text-sm hover:text-secondary'
                to="/recover-password"
            >Forgot my password</Link>
        </nav>
    </>
  );
};

export default Login;
