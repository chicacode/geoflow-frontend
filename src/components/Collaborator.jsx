import useProjects from "../hooks/useProjects";
import PropTypes from 'prop-types';

const Collaborator = ({ collaborator }) => {
  const { handleModalDeleteCollaborator } = useProjects();

  const { name, email } = collaborator;
  return (
    <div className="p-5 flex justify-between items-center">
      <div className='px-5'>
        <p>{name}</p>
        <p className="text-xs text-gray">{email}</p>
      </div>

      <div>
        <button
          type="button"
          className="bg-error px-4 py-2 text-white uppercase text-sm rounded-lg hover:bg-secondary-hover hover:text-secondary"
          onClick={() => handleModalDeleteCollaborator(collaborator)}
        >
         Delete
        </button>
      </div>
    </div>
  );
};

Collaborator.propTypes = {
    collaborator: PropTypes.object.isRequired,
  };

export default Collaborator;
