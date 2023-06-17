
import { useState } from "react";
import useProjects from "../hooks/useProjects";
import Alert from "./Alert";

const FormCollaborator = () => {
  const [email, setEmail] = useState("");
  const { alert, showAlert, submitCollaborator } = useProjects();

  const handleSubmit = e => {
    e.preventDefault();

    if(email === ''){
      showAlert({
        msg: "Email required",
        error: true
      })
      return
    }
    submitCollaborator(email)
  }

  const { msg } = alert;
  return (
    <form  className="my-10 bg-white shadow rounded-xl p-5 font-Poppins"
    onSubmit={handleSubmit}>

      { msg && <Alert alert={alert} />}

       <div className="my-5">
          <label
            className="flex justify-start text-secondary capitalize text-lg font-medium"
            htmlFor="email"
          >
            collaborator email
          </label>
          <input
            id="email"
            type="email"
            placeholder="collaborator email"
            className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray focus:border-primary focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Search collaborator"
          className="bg-secondary my-5 w-full py-3 text-white uppercase rounded-lg hover:cursor-pointer hover:bg-primary hover:text-secondary transition-colors"
        />

    </form>
  )
}

export default FormCollaborator