import FormCollaborator from "../components/FormCollaborator"

const NewCollaborator = () => {
  return (
   <>
    <h1 className="font-bold text-secondary text-2xl capitalize">add collaborator</h1>

    <div className="mt-10 flex justify-center">
        <FormCollaborator />
      </div>
   </>
  )
}

export default NewCollaborator