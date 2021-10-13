import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = (props) => {
  const { continent } = props;

  return (
    <div>
      <div className="card-item">
        {continent}
      </div>
    </div>
  );
};

Home.propTypes = {
  continent: PropTypes.string.isRequired,
};

export default Home;
