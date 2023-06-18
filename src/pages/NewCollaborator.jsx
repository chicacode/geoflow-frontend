import { useEffect } from "react";
import FormCollaborator from "../components/FormCollaborator"
import useProjects from "../hooks/useProjects";
import { useParams } from "react-router-dom"
import Alert from "../components/Alert";

const NewCollaborator = () => {
  const {getProject, project, loading, collaborator, alert, addCollaborator } = useProjects()
  const params = useParams()

  useEffect(() =>{
    getProject(params.id)
  }, [])

  if(!project?._id) return <Alert alert={alert}/>
  return (
   <>
    <h1 className="font-bold text-secondary text-2xl capitalize">add collaborator project: <span className="text-primary"> {project.name}</span></h1>


        <FormCollaborator />

        {loading ? <p>
          Loading ...
        </p> : collaborator?._id && (
                  <div className='flex justify-center mt-10'>
                  <div className='bg-white py-2 px-5 md:w-1/2 rounded-lg shadow w-full'>
                      <h2 className='text-grayText font-bold py-2'>Result:</h2>
      
                      <div className='flex justify-between items-center py-2'>
                        <p>{collaborator.name}</p>
      
                        <button
                          type="button"
                          className='bg-primary-hover px-5 py-2 rounded-lg uppercase text-secondary  text-sm hover:text-primary hover:bg-secondary-light'
                          onClick={() => addCollaborator({
                            email: collaborator.email
                          })}
                        >Add to the project</button>
                      </div>
                  </div>
              </div>
        )}
   
   </>
  )
}

export default NewCollaborator