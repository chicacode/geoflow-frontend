import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PreviewProject = ({ project }) => {
  const { auth } = useAuth();
  const { name, _id, client, creator } = project;
  return (
    <div className="border-b p-5 flex flex-col md:flex-row justify-between">
      <div className="flex items-center gap-2">
        <Link to={`${_id}`} className="text-grayText">
          <p className="flex-1 hover:text-secondary text-sm font-medium">
            {name}
          </p>
        </Link>

        {auth._id !== creator && (
          <p className="p-1 text-xs rounded-lg text-white bg-success font-bold uppercase">
            Collaborator
          </p>
        )}
      </div>
      <Link to={'https://ciccc.ca/?gclid=CjwKCAjwyqWkBhBMEiwAp2yUFj85W_HE8NblBlCj4bSOMUB7bT0q6JpMceYKr6VqjVev5ARqlrcQRhoCrVAQAvD_BwE'} target="_blank">
      <span className="text-sm text-gray-500 uppercase"> {client}</span>
      </Link>

      
    </div>
  );
};

PreviewProject.propTypes = {
  project: PropTypes.object.isRequired,
};

export default PreviewProject;
