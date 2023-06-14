import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectForm = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [dateDelivered, setDateDelivered] = useState('')
    const [client, setClient] = useState('')

    const handleSubmit = async (e) => {
         e.preventDefault();
    }
  return (
    <form className='bg-white py-10 px-5 md:w-1/2 rounded-lg shadow'
    onSubmit={handleSubmit}
    >
      <div className='mb-5'>
        <label
          htmlFor="name"
          className="text-grayText uppercase font-Poppins text-sm"
        >
          Project Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Project Name"
          className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray  focus:border-primary focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className='mb-5'>
        <label
          htmlFor="description"
          className="text-grayText uppercase font-Poppins text-sm"
        >
          Description
        </label>
        <input
          id="description"
          type="text"
          placeholder="Project Description"
          className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray  focus:border-primary focus:outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className='mb-5'>
        <label
          htmlFor="dateDelivered"
          className="text-grayText uppercase font-Poppins text-sm"
        >
          Date Delivery
        </label>
        <input
          id="dateDelivered"
          type="date"
          placeholder="dateDelivered"
          className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray  focus:border-primary focus:outline-none"
          value={dateDelivered}
          onChange={(e) => setDateDelivered(e.target.value)}
        />
      </div>

      <div className='mb-5'>
        <label
          htmlFor="client"
          className="text-grayText uppercase font-Poppins text-sm"
        >
          client
        </label>
        <input
          id="client"
          type="text"
          placeholder="Client Name"
          className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray  focus:border-primary focus:outline-none"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
      </div>

      <input type="submit" value={'Create new project'} className='bg-secondary my-5 w-full py-3 text-white uppercase font-bold rounded-lg hover:cursor-pointer hover:bg-primary hover:text-secondary transition-colors'/>
    </form>
  );
};

export default ProjectForm;
