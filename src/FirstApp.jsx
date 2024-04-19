import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle }) => {
  return (
    <>
      <h1 data-testid='test-title'>{title}</h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  subTitle: 'Evert Ortiz',
  title: 'Aprendiendo react',
};
