import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Alert from "../components/Alert";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || email.length < 6) {
      setAlert({
        msg: "Email required",
        error: true,
      });

      return
    }

    try {
      // TODO: Move axios client
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/recover-password`,
        { email }
      );
      setAlert({
        msg: data.msg,
        error: false,
      });
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alert;
  return (
    <div>
      <h1 className="text-primary text-3xl capitalize font-bold">
        Recover your Access
      </h1>
      <span className="text-secondary font-Poppins">
        Don&apos;t lose your projects
      </span>

      {msg  && <Alert alert={alert}/>}

      <form
        className="my-10 bg-white shadow rounded-xl p-10 font-Poppins"
        onSubmit={handleSubmit}
      >
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
