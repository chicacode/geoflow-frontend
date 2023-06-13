import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axiosClient from "../config/axiosClient";
import Alert from "../components/Alert";

const ActivationAccount = () => {
  const [alert, setAlert] = useState({});
  const [accountConfirmed, setAccountConfirmed] = useState(false);

  //get token by url
  const params = useParams();
  const { id } = params;


  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const url = `/users/verification/${id}`;
        const { data } = await axiosClient(url);

        setAlert({
          msg: data.msg,
          error: false,
        });

        setAccountConfirmed(true);
      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };

    confirmAccount();
  }, []);

  const { msg } = alert;
  return (
    <div>
      <h1 className="text-primary text-3xl capitalize font-bold">
        Activate you Password
      </h1>
      <span className="text-secondary font-Poppins">
        Start managing your projects
      </span>

      <div className="mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alert alert={alert} />}

        {accountConfirmed && (
          <Link
            className="block text-center my-5 text-primary uppercase text-sm"
            to={"/"}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default ActivationAccount;
