import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import axiosClient from "../config/axiosClient";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([name, email, password, repeatPassword].includes("")) {
      setAlert({
        msg: "All fields are required",
        error: true,
      });
      return;
    }


    if(password !== repeatPassword ) {
      setAlert({
          msg: 'Passwords are not equal',
          error: true
      })
      return;
  }

  if(password.length < 6 ) {
      setAlert({
          msg: 'Password is too short, add at least 6 characters.',
          error: true
      })
      return
  }
    setAlert({})   

    // Create user in API

    try {
      const { data } = await axiosClient.post(`/users`, {name, email, password});
      setAlert({
        msg: data.msg,
        error: false
      });

      setName('')
      setEmail('')
      setPassword('')
      setRepeatPassword('')
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true
      });
    }
  };

  const { msg } = alert;

  return (
    <div>
      <h1 className="text-primary text-3xl capitalize font-bold">
        Create your Account
      </h1>
      <span className="text-secondary font-Poppins">Manage your projects</span>

      {msg && <Alert alert={alert} />}
      <form
        className="my-10 bg-white shadow rounded-xl p-10 font-Poppins"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            className="flex justify-start text-secondary-light text-lg font-medium"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="name"
            placeholder="Name"
            className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray  focus:border-primary focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray  focus:border-primary focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="flex justify-start text-secondary-light  text-lg font-medium"
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

        <div className="my-5">
          <label
            className="flex justify-start text-secondary-light  text-lg font-medium"
            htmlFor="password2"
          >
            Repeat your Password
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Repeat your Password"
            className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray focus:border-primary focus:outline-none"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Create Account"
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
          to="/recover-password"
        >
          Forgot my password
        </Link>
      </nav>
    </div>
  );
};
export default Register;
