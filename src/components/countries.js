import PropTypes from 'prop-types';
import { continentLink } from './continentCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const Countries = (props) => {
  const { continent, countries } = props;
  // const extractContinent = continentLink(continent);
  // console.log(extractContinent);
  // eslint-disable-next-line consistent-return
  const returnAsia = () => {
    if (continent === continentLink(continent)) {
      return countries;
    }
  };

  return (
    <div>
      <div className="card-item">
        {returnAsia()}
      </div>
    </div>
  );
};

Countries.propTypes = {
  continent: PropTypes.string.isRequired,
  countries: PropTypes.string.isRequired,
};

export default Countries;
