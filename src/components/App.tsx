import Profile from './Profile/Profile'
import FriendList from './FriendList/FriendList/FriendList'
import TransactionHistory from './TransactionList/TransactionList/TransactionList'
import Section from './Section/Section'

import user from '../db/user.json'
import friends from '../db/friends.json'
import transactions from '../db/transactions.json'

export default function App() {
  return (
    <>
      <Section title="SOCIAL NETWORK PROFILE">
        <Profile
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </Section>

      <Section title="FRIENDS LIST">
        <FriendList friends={friends} />
      </Section>

      <Section title="TRANSACTION HISTORY">
        <TransactionHistory transactions={transactions} />
      </Section>
    </>
  )
}
