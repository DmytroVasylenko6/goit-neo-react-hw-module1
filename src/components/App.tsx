import Profile from './Profile'
import FriendList from './FriendList'
import TransactionHistory from './TransactionList'
import Section from './Section'

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
