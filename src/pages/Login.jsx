import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../config/axiosClient";
import Alert from "../components/Alert";
import useAuth from '../hooks/useAuth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlert({
        msg: "All fields are required",
        error: true,
      });
      return;
    }

    try {
      const { data } = await axiosClient.post(`/users/login`, {
        email,
        password,
      });
      setAlert({});
      localStorage.setItem("token", data.token);
      setAuth(data)
      navigate("/projects");
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alert;
  return (
    <>
      <h1 className="text-primary text-3xl capitalize font-bold">Sign In</h1>
      <span className="text-secondary font-Poppins">Manage your projects</span>
      {msg && <Alert alert={alert} />}
      <form
        className="my-10 bg-white shadow rounded-xl p-10 font-Poppins"
        onSubmit={handleSubmit}
      >
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          className="block text-center my-5 text-primary uppercase text-sm hover:text-secondary"
          to="/register"
        >
          No account? Register
        </Link>

        <Link
          className="block text-center my-5 text-primary uppercase text-sm hover:text-secondary"
          to="/recover-password"
        >
          Forgot my password
        </Link>
      </nav>
    </>
  );
};

export default Login;
