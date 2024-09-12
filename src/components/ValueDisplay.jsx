import styles from './ValueDisplay.module.css';
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function ValueDisplay({ value }) {
  const valueRef = useRef(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  return (
    <div className={styles.text_container}>
      <p>Current Value: {value}</p>
      <p>Previous Value: {valueRef.current}</p>
    </div>
  );
}

ValueDisplay.propTypes = {
  value: PropTypes.string,
};

export default ValueDisplay;
