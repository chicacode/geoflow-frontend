import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axiosClient from "../config/axiosClient";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  return (
    <ProjectContext.Provider value={{}}>{children}</ProjectContext.Provider>
  );
};
ProjectProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export { ProjectProvider };

export default ProjectContext;
