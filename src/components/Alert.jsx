import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
  return (
    <div
      className={`${
        alert.error ? "bg-error" : "from-primary to-primary-light"
      } bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-medium text-sm my-10`}
    >
      {alert.msg}
    </div>
  );
};
Alert.propTypes = {
  alert: PropTypes.object.isRequired,
};

export default Alert;
