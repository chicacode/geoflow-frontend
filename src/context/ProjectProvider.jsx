import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axiosClient from "../config/axiosClient";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [alert, setAlert] = useState({});

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

        const { data } = await axiosClient('/projects', config);
        setProjects(data)

      } catch (error) {
        console.log(error)
      }
    }
    getProjects();
  }, []);

  const showAlert = (alert) => {
    setAlert(alert);

    setTimeout(() => {
      setAlert({});
    }, 5000);
  };

  const submitProject = async (project) => {
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
      setProjects([...projects, data])

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
  return (
    <ProjectContext.Provider
      value={{ projects, setProjects, alert, showAlert, submitProject }}
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
