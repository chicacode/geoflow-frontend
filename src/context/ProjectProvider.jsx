import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axiosClient from "../config/axiosClient";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [alert, setAlert] = useState({});
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(false)

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
   if(project.id){
    await updateProject(project)
   }else{
    await createProject(project)
   }
  };

  const updateProject = async project => {

    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axiosClient.put(`/projects/${project.id}`, project, config)

     // Sync State

     const updatedProjects = projects.map(projectState => projectState._id === data._id ? data : projectState)
// TODO FIX this
    setProjects(updatedProjects)


     //Show alert
      setAlert({
        msg: "Project updated correctly",
        error: false,
      });

      // Redirect user
    } catch (error) {
      console.log(error);
    }
  }


  const createProject = async project =>{
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
  }
  const getProject = async id =>{
    setLoading(true)
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axiosClient(`/projects/${id}`, config)
      setProject(data)
      setAlert({})
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error:true
      })

      setTimeout(() =>{
        setAlert({})
      }, 3000)
    }finally{
      setLoading(false)
    }
  }
  return (
    <ProjectContext.Provider
      value={{ projects, setProjects, alert, showAlert, submitProject, getProject, project, loading }}
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
