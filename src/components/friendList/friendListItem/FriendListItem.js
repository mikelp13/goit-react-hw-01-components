import React from 'react';
import styles from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
  const statusClass = isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.item} >
      <span className={statusClass}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};


FriendListItem.defaultProps = {
  avatar:
    'https://i.pinimg.com/originals/a6/f3/c5/a6f3c55ace829310723adcb7a468869b.png',
};

export default FriendListItem
