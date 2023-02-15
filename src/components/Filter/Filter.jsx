import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterSearch } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import styles from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(filterSearch(event.target.value));
  };

  return (
    <div className={styles.filter}>
      <label className={styles.find}>
        <p>Find contacts by name</p>
        <input type="name" value={filter} onChange={handleChange} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
