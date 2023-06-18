import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useProjects from "../hooks/useProjects";
import MofalFormTask from "../components/ModalFormTask";
import ModalFormDeleteTask from "../components/ModalFormDeleteTask";
import ModalFormDeleteCollaborator from "../components/ModalFormDeleteCollaborator";
import Task from "../components/Task";
import Alert from "../components/Alert";
import Collaborator from "../components/Collaborator";

const Project = () => {
  const params = useParams();
  const { getProject, project, loading, handleModalTask, alert } =
    useProjects();

  useEffect(() => {
    getProject(params.id);
  }, []);

  const { name } = project;

  if (loading) return "Loading...";

  const { msg } = alert;
  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-bold text-secondary text-2xl">{name}</h1>
        <div className="flex items-center gap-2 text-grayText hover:text-secondaryInfo">
          <Link
            to={`/projects/edit/${params.id}`}
            className="font-bold text-grayText hover:text-secondaryInfo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </Link>
          <span className="uppercase font-Space font-bold">Edit</span>
        </div>
      </div>
      <button
        onClick={handleModalTask}
        type="button"
        className="text-sm px-4 py-2 w-full md:w-auto rounded-lg uppercase font-Space text-secondary bg-secondary-hover text-center mt-4 flex gap-2 items-center justify-center hover:cursor-pointer hover:bg-secondary-light hover:font-bold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        New Task
      </button>

      <p className="font-Poppins font-bold text-xl mt-10 text-secondary">
        Project Tasks
      </p>

      {msg && <Alert alert={alert} />}
      <div className="bg-white shadow mt-10 rounded-lg">
        {project.tasks?.length ? (
          project.tasks?.map((task, idx) => <Task key={idx} task={task} />)
        ) : (
          <p className="text-center my-5 p-10">No tasks</p>
        )}
      </div>

      <>
        <div className="items-center justify-between mt-10">
          <p className="font-Poppins font-bold text-xl text-secondary">
            Collaborators
          </p>
          <div className="flex items-center gap-2">
            <Link
              to={`/projects/new-collaborator/${project._id}`}
              className="text-grayText hover:text-secondaryInfo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </Link>
            <span className="uppercase font-Space font-bold text-grayText hover:text-secondaryInfo">
              {" "}
              Add
            </span>
          </div>

          <div className="bg-secondaryInfo shadow mt-5 rounded-lg">
            {project.colaborators?.length ? (
              project.colaborators?.map((collaborator) => (
                <Collaborator
                  key={collaborator._id}
                  collaborator={collaborator}
                />
              ))
            ) : (
              <p className="text-center my-5 p-5 capitalize">
                no collaborators in this project
              </p>
            )}
          </div>
        </div>
      </>
      <MofalFormTask />
      <ModalFormDeleteTask />
      <ModalFormDeleteCollaborator />
    </>
  );
};

export default Project;
