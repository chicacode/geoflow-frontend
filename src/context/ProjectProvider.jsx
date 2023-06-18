import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axiosClient from "../config/axiosClient";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [alert, setAlert] = useState({});
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalFormTask, setModalFormTask] = useState(false);
  const [task, setTask] = useState({});
  const [modalDeleteTask, setModalDeleteTask] = useState(false);
  const [collaborator, setCollaborator] = useState({});
  const [modalDeleteCollaborator, setModalDeleteCollaborator] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getProjects = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axiosClient("/projects", config);
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  const showAlert = (alert) => {
    setAlert(alert);

    setTimeout(() => {
      setAlert({});
    }, 5000);
  };

  const submitProject = async (project) => {
    if (project.id) {
      await updateProject(project);
    } else {
      await createProject(project);
    }
  };

  const updateProject = async (project) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axiosClient.put(
        `/projects/${project.id}`,
        project,
        config
      );

      // Sync State

      const updatedProjects = projects.map((projectState) =>
        projectState._id === data._id ? data : projectState
      );
      setProjects(updatedProjects);
      //Show alert
      setAlert({
        msg: "Project updated correctly",
        error: false,
      });

      // Redirect user
      setTimeout(() => {
        setAlert({});
        navigate("/projects");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const createProject = async (project) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axiosClient.post("/projects", project, config);
      //update state
      setProjects([...projects, data]);

      setAlert({
        msg: "Project created correctly",
        error: false,
      });

      setTimeout(() => {
        setAlert({});

        navigate("/projects");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  const getProject = async (id) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axiosClient(`/projects/${id}`, config);
      setProject(data);
      setAlert({});
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });

      setTimeout(() => {
        setAlert({});
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axiosClient.delete(`/projects/${id}`, config);

      //sync state

      const updatedProjects = projects.filter(
        (projectState) => projectState._id !== id
      );
      setProjects(updatedProjects);

      setAlert({
        msg: data.msg,
        error: false,
      });

      setTimeout(() => {
        setAlert({});
        navigate("/projects");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalTask = () => {
    setModalFormTask(!modalFormTask);
    setTask({});
  };

  const submitTask = async (task) => {
    if (task?.id) {
      await updateTask(task);
    } else {
      await createTask(task);
    }
  };

  const createTask = async (task) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axiosClient.post(`/tasks`, task, config);

      // Update state
      const projectUpdated = { ...project };
      projectUpdated.tasks = [...projectUpdated.tasks, data];
      setProject(projectUpdated);
      setAlert({});
      // Hide form
      setModalFormTask(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (task) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axiosClient.put(`/tasks/${task.id}`, task, config);

      // Update state
      const projectUpdated = { ...project };
      projectUpdated.tasks = projectUpdated.tasks.map((taskState) =>
        taskState._id === data._id ? data : taskState
      );
      setProject(projectUpdated);
      setAlert({});

      // Hide form
      setModalFormTask(false);
    } catch (error) {
      console.log(error);
    }
  };

  const completeTask = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axiosClient.post(`/tasks/state/${id}`, {}, config);

      // Change state in UI
      const projectUpdated = { ...project };
      projectUpdated.tasks = projectUpdated.tasks.map((taskState) =>
        taskState._id === data._id ? data : taskState
      );
      setProject(projectUpdated);
      setTask({});
      setAlert({});
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleModalEditTask = (task) => {
    setTask(task);
    setModalFormTask(true);
  };

  const handleModalDeleteTask = (task) => {
    setTask(task);
    setModalDeleteTask(!modalDeleteTask);
  };

  const deleteTask = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axiosClient.delete(`/tasks/${task._id}`, config);

      setAlert({
        msg: data.msg,
        error: false,
      });

      const projectUpdated = { ...project };
      projectUpdated.tasks = projectUpdated.tasks.filter(
        (taskState) => taskState._id !== task._id
      );
      setProject(projectUpdated);
      setModalDeleteTask(false);

      setTask({});

      setTimeout(() => {
        setAlert({});
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const submitCollaborator = async (email) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axiosClient.post(
        "/projects/collaborators",
        { email },
        config
      );
      setCollaborator(data);

      setAlert({});
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const findCollaborator = async (email) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axiosClient.delete(
        "/projects/collaborators",
        { email },
        config
      );
      console.log(data);
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const addCollaborator = async (email) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axiosClient.post(
        `/projects/collaborators/${project._id}`,
        email,
        config
      );

      setAlert({
        msg: data.msg,
        error: false,
      });

      setCollaborator({});

      setTimeout(() => {
        setAlert({});
      }, 3000);
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const handleModalDeleteCollaborator = (collaborator) => {
    setModalDeleteCollaborator(!modalDeleteCollaborator);
    setCollaborator(collaborator);
  };

  const deleteCollaborator = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axiosClient.post(
        `/projects/delete-collaborator/${project._id}`,
        { id: collaborator._id },
        config
      );

      const projectUpdated = { ...project };

      projectUpdated.colaborators = projectUpdated.colaborators.filter(
        (collaboratorState) => collaboratorState._id !== collaborator._id
      );

      setProject(projectUpdated);
      setAlert({
        msg: data.msg,
        error: false,
      });

      setCollaborator({});
      setModalDeleteCollaborator(false);

      setTimeout(() => {
        setAlert({});
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        setProjects,
        alert,
        showAlert,
        submitProject,
        getProject,
        project,
        loading,
        deleteProject,
        modalFormTask,
        handleModalTask,
        task,
        submitTask,
        completeTask,
        handleModalEditTask,
        modalDeleteTask,
        handleModalDeleteTask,
        deleteTask,
        submitCollaborator,
        collaborator,
        findCollaborator,
        addCollaborator,
        deleteCollaborator,
        handleModalDeleteCollaborator,
        modalDeleteCollaborator,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
ProjectProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export { ProjectProvider };

export default ProjectContext;
