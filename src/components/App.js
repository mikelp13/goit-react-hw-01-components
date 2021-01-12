import React from 'react';
import Profile from './profile/Profile';
import user from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import friends from '../data/friends.json';
import transactions from '../data/transaction.json';
import TransactionHistory from './transactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        // name={user.name}
        // tag={user.tag}
        // location={user.location}
        // avatar={user.avatar}
        // stats={user.stats}
        {...user}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}
