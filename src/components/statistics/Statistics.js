import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

const Statistics = ({ title, stats }) => {

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(item => {
          return (
            <li
              key={item.id}
              className={styles.item}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default Statistics;
