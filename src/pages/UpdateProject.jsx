import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProjects from "../hooks/useProjects";
import ProjectForm from "../components/ProjectForm";

const UpdateProject = () => {

    const params = useParams();
    const { project, getProject } = useProjects();

    useEffect(() =>{
        getProject(params.id)
    }, [])

    const { name } = project
  return (
  
  <> 
      <h1 className="font-bold text-secondary text-2xl">{name}</h1>

      <div className="mt-10 flex justify-center rounded-lg px-4">
        <ProjectForm />
      </div>
  </>

  )
}

export default UpdateProject