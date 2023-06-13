import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Alert from "../components/Alert";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});
  const [validToken, setValidtoken] = useState(false);
  const [passwordModified, setPasswordModified] = useState(false);

  const params = useParams();
  const { token } = params;
  console.log("TOKEN", token);
  useEffect(() => {
    const checkToken = async () => {
      try {
        await axios(
          `http://localhost:4000/api/users/recover-password/${token}`
        );
        setValidtoken(true);
      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    checkToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlert({
        msg: "Password required minimun 6 characters",
        error: true,
      });

      return;
    }

    try {
      const url = `http://localhost:4000/api/users/recover-password/${token}`;

      const { data } = await axios.post(url, { password });
      setAlert({
        msg: data.msg,
        error: false,
      });
      setPasswordModified(true);
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
        Reset you Password
      </h1>
      <span className="text-secondary font-Poppins">
        Don&apos;t lose access to your projects
      </span>

      {msg && <Alert alert={alert} />}

      {validToken && (
        <form
          className="my-10 bg-white shadow rounded-xl p-10 font-Poppins"
          onSubmit={handleSubmit}
        >
          <div className="my-5">
            <label
              className="flex justify-start text-secondary-light  text-lg font-medium"
              htmlFor="password"
            >
              New Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="New Password"
              className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray focus:border-primary focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Save New Password"
            className="bg-secondary my-5 w-full py-3 text-white uppercase font-bold rounded-lg hover:cursor-pointer hover:bg-primary hover:text-secondary transition-colors"
          />
        </form>
      )}

      {passwordModified && (
        <Link
          className="block text-center my-5 text-primary uppercase text-sm hover:text-secondary"
          to="/"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default NewPassword;
