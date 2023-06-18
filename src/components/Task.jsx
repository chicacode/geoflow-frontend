import { formatDate } from "../helpers/formatDate";
import useProjects from "../hooks/useProjects";
import PropTypes from "prop-types";

const Task = ({ task }) => {
  const { completeTask, handleModalEditTask, handleModalDeleteTask } =
    useProjects();
  const { name, description, priority, state, dateDelivered, _id } = task;
  return (
    <div className="p-5 flex justify-between items-center">
      <div className="flex flex-col  items-start">
        <p className="mb-1 text-xl">{name}</p>
        <p className="mb-1 text-sm text-secondary uppercase">{description}</p>
        <p className="mb-1 text-sm">{formatDate(dateDelivered)}</p>
        <p className="mb-1 text-secondary">
          Priority:{" "}
          <span
            className={`${priority === "High" ? "text-error" : "text-success"}`}
          >
            {priority}
          </span>
        </p>
        {/* { estado && <p className="text-xs bg-green-600 uppercase p-1 rounded-lg text-white">Completada por: {tarea.completado.nombre}</p>} */}
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <button
          className="bg-primary-light px-4 py-3 text-secondary uppercase font-Poppins text-sm rounded-lg hover:bg-primary-hover"
          onClick={() => handleModalEditTask(task)}
        >
          Edit
        </button>

        <button
          className={`${
            state ? "bg-success text-gray hover:bg-success-hover hover:text-secondary" : "bg-primary-light text-secondary hover:bg-primary-hover"
          } px-4 py-3 uppercase font-Poppins text-sm rounded-lg `}
          onClick={() => {
            completeTask(_id)
          }}
        >
          {state ? "Complete" : "Incomplete"}
        </button>
        <button
          className="bg-primary-light px-4 py-3 text-secondary uppercase  text-sm rounded-lg hover:bg-error hover:text-gray"
          onClick={() => handleModalDeleteTask(task)}
        >
          Delete
        </button>

      </div>
    </div>
  );
};
Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
