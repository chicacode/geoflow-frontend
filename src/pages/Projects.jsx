import useProjects from "../hooks/useProjects"
// import Alert from "../components/Alert"

const Projects = () => {
  const { projects } = useProjects()
  console.log(projects)
    // const { msg }  = alert;
  return (
    <>
    <h1 className="text-4xl font-Poppins text-secondary font-bold">Projects</h1>
    <div className="bg-grayDarkOpacity26 shadow mt-4 rounded-lg px-4">
        all projects
    </div>
    </>
    
  )
}

export default Projects