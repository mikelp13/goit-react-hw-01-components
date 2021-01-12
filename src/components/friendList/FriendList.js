import React from 'react';
import styles from './FriendList.module.css';
import FriendListItem from './friendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
  
  return (
    <ul className={styles.friendList}>
        {friends.map(friend => (
         <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        key={friend.id}
      /> 
    ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default FriendList;
