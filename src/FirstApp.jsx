import PropTypes from 'prop-types';

export const FirstApp = ({ title, name }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
};

FirstApp.defaultProps = {
  name: 'Evert Ortiz',
  title: 'Aprendiendo react',
};
