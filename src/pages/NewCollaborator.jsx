import { useEffect } from "react";
import FormCollaborator from "../components/FormCollaborator"
import useProjects from "../hooks/useProjects";
import { useParams } from "react-router-dom"
import Alert from "../components/Alert";

const NewCollaborator = () => {
  const {getProject, project, loading, collaborator, alert} = useProjects()
  const params = useParams()

  useEffect(() =>{
    getProject(params.id)
  }, [])

  if(!project?._id) return <Alert alert={alert}/>
  return (
   <>
    <h1 className="font-bold text-secondary text-2xl capitalize">add collaborator</h1>


        <FormCollaborator />
   
   </>
  )
}

export default NewCollaborator