import ProjectForm from "../components/ProjectForm";
const NewProject = () => {
  return (
    <>
      <h1 className="text-4xl flex justify-center font-Poppins text-secondary font-bold">
        Create a new project
      </h1>
      <div className="mt-10 flex justify-center rounded-lg px-4">
        <ProjectForm />
      </div>
    </>
  );
};

export default NewProject;
