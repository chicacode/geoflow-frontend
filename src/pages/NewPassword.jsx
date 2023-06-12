
const NewPassword = () => {
    return (
      <div>
      <h1 className="text-primary text-3xl capitalize font-bold">
        Reset you Password
      </h1>
      <span className="text-secondary font-Poppins">Don&apos;t lose access to your projects</span>
  
      <form className="my-10 bg-white shadow rounded-xl p-10 font-Poppins">
        <div className="my-5">
          <label
            className="flex justify-start text-secondary-light  text-lg font-medium"
            htmlFor="password"
          >
            New Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="New Password"
            className="w-full mt-3 p-3 border border-secondary-light rounded-xl bg-gray focus:border-primary focus:outline-none"
          />
        </div>
        <input
          type="submit"
          value="Save New Password"
          className="bg-secondary my-5 w-full py-3 text-white uppercase font-bold rounded-lg hover:cursor-pointer hover:bg-primary hover:text-secondary transition-colors"
        />
      </form>
    </div>
    )
  }
  
  export default NewPassword