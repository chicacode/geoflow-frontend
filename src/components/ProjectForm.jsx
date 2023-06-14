import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useProjects from "../hooks/useProjects";
import Alert from "./Alert";

const ProjectForm = () => {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateDelivered, setDateDelivered] = useState("");
  const [client, setClient] = useState("");

  const params = useParams();
  const { showAlert, alert, submitProject, project } = useProjects();

  // If ID exists = edit else = new project
  useEffect(() => {
    if (params.id) {
      setId(project._id);
      setName(project.name);
      setDescription(project.description);
      setDateDelivered(project.dateDelivered?.split('T')[0])
      setClient(project.client);
    }
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validate

    if ([name, description, dateDelivered, client].includes("")) {
      showAlert({
        msg: "All fields are required",
        error: true,
      });
      return;
    }

    await submitProject({ name, description, dateDelivered, client });
    setId(null);
    setName("");
    setDescription("");
    setDateDelivered("");
    setClient("");
  };

  const { msg } = alert;
  return (
    <form
      className="bg-white py-10 px-5 lg:w-1/2 rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      {msg && <Alert alert={alert} />}
      <div className="mb-5">
        <label
          htmlFor="name"
          className="text-grayText uppercase font-Poppins text-sm"
        >
          Project Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Project Name"
          className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray  focus:border-primary focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="description"
          className="text-grayText uppercase font-Poppins text-sm"
        >
          Description
        </label>
        <textarea
          id="description"
          type="text"
          placeholder="Project Description"
          className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray  focus:border-primary focus:outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="date-delivered"
          className="text-grayText uppercase font-Poppins text-sm"
        >
          Date Delivery
        </label>
        <input
          id="date-delivered"
          type="date"
          className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray  focus:border-primary focus:outline-none"
          value={dateDelivered}
          onChange={(e) => setDateDelivered(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="client"
          className="text-grayText uppercase font-Poppins text-sm"
        >
          client
        </label>
        <input
          id="client"
          type="text"
          placeholder="Client Name"
          className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray  focus:border-primary focus:outline-none"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
      </div>

      <input
        type="submit"
        value={id ? "Update project" : "Create project"}
        className="bg-secondary my-5 w-full py-3 text-white uppercase rounded-lg hover:cursor-pointer hover:bg-primary hover:text-secondary transition-colors"
      />
    </form>
  );
};

export default ProjectForm;
